<script setup lang="ts">
const settings = useSettingsStore()

function toggleWallpaper() {
  if (
    settings.personalization.background.picture.path ===
    '/img/wallpaper/windows10.jpg'
  ) {
    changeWallpaper('/img/wallpaper/tetris.png')

    return
  }

  changeWallpaper('/img/wallpaper/windows10.jpg')
}

function changeWallpaper(path: string) {
  settings.personalization.background.picture.path = path
}
</script>

<template>
  <div
    class="absolute top-0 left-0 z-[-1] h-screen w-screen bg-black"
    @click="toggleWallpaper"
  >
    <NuxtImg
      :src="settings.personalization.background.picture.path"
      class="pointer-events-none h-full w-full object-cover object-center"
    />
  </div>
</template>
