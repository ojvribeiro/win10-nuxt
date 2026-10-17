<script setup lang="ts">
const PREVIEW_WIDTH = 320

const { width, height } = useWindowSize()

const scale = computed(() => PREVIEW_WIDTH / width.value)
</script>

<template>
  <div
    :style="{ width: `${PREVIEW_WIDTH}px`, height: `${height * scale}px` }"
    class="relative overflow-hidden bg-black"
  >
    <!-- The real wallpaper scaled down, so every fit mode previews exactly like the desktop -->
    <div
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${scale})`,
      }"
      class="absolute top-0 left-0 isolate origin-top-left"
    >
      <DesktopWallpaper />
    </div>

    <div
      class="absolute top-[22%] left-[28%] flex h-[42%] w-[44%] flex-col border border-white/20 bg-black/90 shadow-lg"
    >
      <div class="h-2.5 bg-white/10" />

      <div class="grid flex-1 place-items-center text-2xl">Aa</div>
    </div>

    <div
      :style="{ height: `${TASKBAR_HEIGHT * scale}px` }"
      class="absolute right-0 bottom-0 left-0 bg-[#212121]/95"
    />
  </div>
</template>
