<template>
  <ScrollAreaRoot
    class="h-full overflow-hidden transition-opacity duration-300"
    :scroll-hide-delay="0"
  >
    <ScrollAreaViewport class="mr-4 h-full transition-opacity duration-300">
      <slot />
    </ScrollAreaViewport>

    <ScrollAreaScrollbar
      orientation="vertical"
      class="group w-3 hover:bg-[#3a3939]"
    >
      <ScrollAreaThumb
        class="w-1 bg-[#a8a8a8] transition-[colors] [scale:0.1_1] hover:bg-[#888888] active:bg-[#b0b0b0] group-hover:[scale:1_1]"
      />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
