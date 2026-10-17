<script setup lang="ts">
import type { ResizeDirection } from '~/composables/useWindowResize'
import type { AppId } from '~/utils/apps'

interface Props {
  appId: AppId
}

const props = defineProps<Props>()

const appStore = useAppStore()
const settings = useSettingsStore()

const app = computed(() => appDefinitions[props.appId])
const appWindow = computed(() => appStore.getWindow(props.appId))

const isFocused = computed(() => appStore.focusedAppId === props.appId)
const isMaximized = computed(() => !!appWindow.value?.isMaximized)

const isAccentTitleBar = computed(
  () => settings.personalization.colors.showAccentOnTitleBars && isFocused.value
)

const windowElement = useTemplateRef('windowElement')
const dragHandle = useTemplateRef('dragHandle')

const { width: viewportWidth, height: viewportHeight } = useWindowSize()

const { isDragging } = useDraggable(windowElement, {
  handle: dragHandle,
  disabled: isMaximized,
  onMove(position) {
    if (!appWindow.value) {
      return
    }

    // Keep part of the title bar reachable so the window can be grabbed again
    appWindow.value.position = {
      x: Math.min(
        Math.max(position.x, 100 - appWindow.value.size.width),
        viewportWidth.value - 100
      ),
      y: Math.min(
        Math.max(position.y, 0),
        viewportHeight.value - TASKBAR_HEIGHT - TITLE_BAR_HEIGHT
      ),
    }
  },
})

const { isResizing, startResize } = useWindowResize(appWindow, () => ({
  width: app.value.window.minWidth,
  height: app.value.window.minHeight,
}))

const resizeHandles: { direction: ResizeDirection; class: string }[] = [
  { direction: 'n', class: '-top-1 left-2 right-2 h-2 cursor-ns-resize' },
  { direction: 's', class: '-bottom-1 left-2 right-2 h-2 cursor-ns-resize' },
  { direction: 'e', class: '-right-1 top-2 bottom-2 w-2 cursor-ew-resize' },
  { direction: 'w', class: '-left-1 top-2 bottom-2 w-2 cursor-ew-resize' },
  { direction: 'nw', class: '-top-1 -left-1 h-3 w-3 cursor-nwse-resize' },
  { direction: 'se', class: '-bottom-1 -right-1 h-3 w-3 cursor-nwse-resize' },
  { direction: 'ne', class: '-top-1 -right-1 h-3 w-3 cursor-nesw-resize' },
  { direction: 'sw', class: '-bottom-1 -left-1 h-3 w-3 cursor-nesw-resize' },
]

const windowStyle = computed(() => {
  if (!appWindow.value) {
    return {}
  }

  if (appWindow.value.isMaximized) {
    return {
      left: '0px',
      top: '0px',
      width: '100vw',
      height: `calc(100vh - ${TASKBAR_HEIGHT}px)`,
      zIndex: appWindow.value.zIndex,
    }
  }

  return {
    left: `${appWindow.value.position.x}px`,
    top: `${appWindow.value.position.y}px`,
    width: `${appWindow.value.size.width}px`,
    height: `${appWindow.value.size.height}px`,
    zIndex: appWindow.value.zIndex,
  }
})
</script>

<template>
  <div
    ref="windowElement"
    :class="[
      isMaximized ? 'border-0' : 'border',
      isAccentTitleBar ? 'border-accent' : 'border-[#4d4d4d]',
      appWindow?.isMinimized ? 'app-window-minimized' : '',
      isDragging || isResizing ? '' : 'app-window-geometry',
    ]"
    :style="windowStyle"
    :inert="appWindow?.isMinimized"
    class="app-window fixed flex flex-col bg-black text-white shadow-[0_0_32px_-4px_rgba(0,0,0,0.75)]"
    @pointerdown.capture="appStore.focus(props.appId)"
  >
    <div
      ref="dragHandle"
      :class="[
        isAccentTitleBar ? 'bg-accent' : '',
        isFocused ? 'text-white' : 'text-white/50',
      ]"
      :style="{ height: `${TITLE_BAR_HEIGHT}px` }"
      class="flex shrink-0 items-center"
      @dblclick.self="appStore.toggleMaximize(props.appId)"
    >
      <div :id="getTitleBarSlotId(props.appId)" class="flex h-full" />

      <span class="pointer-events-none px-3 text-xs">{{ app.name }}</span>

      <div class="ml-auto flex h-full">
        <ButtonWindowCaption @click="appStore.minimize(props.appId)">
          <Icon icon="fluent-mdl2:chrome-minimize" />
        </ButtonWindowCaption>

        <ButtonWindowCaption @click="appStore.toggleMaximize(props.appId)">
          <Icon
            :icon="
              isMaximized
                ? 'fluent-mdl2:chrome-restore'
                : 'fluent-mdl2:checkbox'
            "
          />
        </ButtonWindowCaption>

        <ButtonWindowCaption
          variant="close"
          @click="appStore.close(props.appId)"
        >
          <Icon icon="fluent-mdl2:chrome-close" />
        </ButtonWindowCaption>
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-hidden">
      <slot />
    </div>

    <template v-if="!isMaximized">
      <div
        v-for="handle in resizeHandles"
        :key="handle.direction"
        :class="handle.class"
        class="absolute"
        @pointerdown="startResize(handle.direction, $event)"
      />
    </template>
  </div>
</template>

<style scoped>
@import '~/assets/css/animations/window.css';
</style>
