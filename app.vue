<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'

  const toolbar = useToolbar()

  const target = ref(null)

  onClickOutside(target, () => {
    if (toolbar.startMenu.isOpen) {
      toolbar.startMenu.isOpen = false
    }
  })
</script>

<template>
  <div>
    <DesktopWallpaper />

    <div
      ref="target"
      class="fixed bottom-11 left-0 h-[500px] w-[500px] overflow-hidden"
      :class="[!toolbar.startMenu.isOpen ? 'pointer-events-none' : '']"
    >
      <Transition name="start-menu">
        <div
          v-if="toolbar.startMenu.isOpen"
          class="absolute left-0 top-0 h-full w-full bg-zinc-900/90 text-white backdrop-blur-md"
        >
          menu iniciar
        </div>
      </Transition>
    </div>

    <Toolbar />
  </div>
</template>

<style scoped lang="scss">
  .start-menu-enter-active {
    transition:
      transform 400ms cubic-bezier(0.475, 1.065, 0.5, 0.845),
      opacity 200ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-leave-active {
    transition: all 100ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-enter-from,
  .start-menu-leave-to {
    opacity: 0;
    transform: translateY(80px);
  }
</style>
