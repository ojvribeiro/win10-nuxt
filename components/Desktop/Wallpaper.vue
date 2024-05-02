<script setup lang="ts">
  const wallpaperModel = defineModel<string>({
    default: '/img/wallpaper.jpg',
  })
</script>

<template>
  <div class="absolute left-0 top-0 z-[-1] h-screen w-screen bg-black">
    <NuxtImg
      :src="wallpaperModel"
      class="h-full w-full object-cover object-center"
    />
  </div>
</template>
