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
        class="group w-3 bg-transparent transition-colors delay-500 duration-300 hover:bg-[#3a3939]"
      >
        <ScrollAreaThumb
          class="origin-right bg-[#888888] transition-[colors,_scale] delay-500 [scale:0.2_1] hover:!bg-[#888888] active:!bg-[#b0b0b0] group-hover:bg-[#616161] group-hover:transition-[colors,_scale] group-hover:delay-500 group-hover:duration-300 group-hover:[scale:1_1]"
        />
      </ScrollAreaScrollbar>
    </Transition>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
