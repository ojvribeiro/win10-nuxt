<script setup lang="ts">
import type { AppId } from '~/utils/apps'

interface Props {
  appId: AppId
}

const props = defineProps<Props>()

const appStore = useAppStore()
const toolbar = useToolbarStore()

const app = computed(() => appDefinitions[props.appId])

const isRunning = computed(() => appStore.isRunning(props.appId))
const isFocused = computed(() => appStore.focusedAppId === props.appId)

function onClick() {
  toolbar.startMenu.isOpen = false

  appStore.toggleFromTaskbar(props.appId)
}
</script>

<template>
  <ButtonToolbar
    :clickable-gap="1"
    :class="[isFocused ? 'bg-white/15 group-hover:bg-white/20' : '']"
    :title="app.name"
    class="relative text-xl"
    @click="onClick"
  >
    <Icon :icon="app.icon" />

    <span
      v-if="isRunning"
      :class="[isFocused ? 'inset-x-0' : 'inset-x-1']"
      class="indicator absolute bottom-0 h-0.5 bg-accent-light"
    />
  </ButtonToolbar>
</template>

<style scoped>
.indicator {
  transition:
    left 150ms ease-out,
    right 150ms ease-out;
}
</style>
