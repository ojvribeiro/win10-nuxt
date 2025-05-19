<template>
  <RadixScrollAreaRoot
    class="h-full overflow-hidden transition-opacity duration-300"
    :scroll-hide-delay="0"
  >
    <RadixScrollAreaViewport
      class="mr-3 h-full transition-opacity duration-300"
    >
      <slot />
    </RadixScrollAreaViewport>

    <Transition name="fade">
      <RadixScrollAreaScrollbar
        orientation="vertical"
        class="group relative w-3 bg-transparent"
      >
        <div
          class="absolute h-full w-3 transition-colors delay-500 duration-300 group-hover:bg-white/10"
        />

        <RadixScrollAreaThumb
          class="origin-right [scale:0.2_1] bg-white/40 transition-[scale] delay-500 group-hover:[scale:1_1] group-hover:bg-white/20 hover:!bg-white/40 active:!bg-white/60"
        />
      </RadixScrollAreaScrollbar>
    </Transition>

    <RadixScrollAreaCorner />
  </RadixScrollAreaRoot>
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
