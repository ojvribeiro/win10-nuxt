<script setup lang="ts">
  const toolbar = useToolbar()
</script>

<template>
  <div
    class="fixed bottom-11 left-0 h-[calc(100vh_-_44px)] w-screen overflow-hidden"
    :class="[!toolbar.startMenu.isOpen ? 'pointer-events-none' : '']"
  >
    <div
      class="absolute left-0 top-0 h-full w-full"
      @mousedown="toolbar.startMenu.isOpen = false"
    />

    <Transition name="start-menu">
      <div
        v-if="toolbar.startMenu.isOpen"
        class="absolute bottom-0 left-0 h-[80%] w-[500px] bg-zinc-900/90 text-white backdrop-blur-md"
      >
        menu iniciar
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .start-menu-enter-active {
    transition:
      transform 900ms cubic-bezier(0.08, 0.915, 0.005, 0.985),
      opacity 250ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-leave-active {
    transition: 150ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-enter-from,
  .start-menu-leave-to {
    opacity: 0;
    transform: translateY(80px);
  }
</style>
