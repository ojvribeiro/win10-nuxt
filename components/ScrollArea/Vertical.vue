<template>
  <ScrollAreaRoot
    class="h-full overflow-hidden transition-opacity duration-300"
    :scroll-hide-delay="0"
  >
    <ScrollAreaViewport class="mr-3 h-full transition-opacity duration-300">
      <slot />
    </ScrollAreaViewport>

    <Transition name="fade">
      <ScrollAreaScrollbar
        orientation="vertical"
        class="group relative w-3 bg-transparent"
      >
        <div
          class="absolute h-full w-3 transition-colors delay-500 duration-300 group-hover:bg-white/10"
        />

        <ScrollAreaThumb
          class="origin-right bg-white/40 transition-[scale] delay-500 [scale:0.2_1] hover:!bg-white/40 active:!bg-white/60 group-hover:bg-white/20 group-hover:[scale:1_1]"
        />
      </ScrollAreaScrollbar>
    </Transition>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
