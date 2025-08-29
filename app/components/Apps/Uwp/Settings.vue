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
  <div>
    <button @click="toggleWallpaper">Change wallpaper</button>
  </div>
</template>
