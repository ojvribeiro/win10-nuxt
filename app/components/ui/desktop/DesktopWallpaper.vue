<script setup lang="ts">
import type { BackgroundFit } from '~/stores/settings'

const settings = useSettingsStore()

const background = computed(() => settings.personalization.background)

const pictureFitClasses: Record<Exclude<BackgroundFit, 'tile'>, string> = {
  fill: 'object-cover',
  fit: 'object-contain',
  stretch: 'object-fill',
  center: 'object-none',
  span: 'object-cover',
}
</script>

<template>
  <div class="absolute top-0 left-0 z-[-1] h-screen w-screen bg-black">
    <div
      v-if="background.type === 'solid'"
      :style="{ backgroundColor: background.solid.color }"
      class="h-full w-full"
    />

    <div
      v-else-if="background.picture.fit === 'tile'"
      :style="{ backgroundImage: `url(${background.picture.path})` }"
      class="h-full w-full bg-repeat"
    />

    <NuxtImg
      v-else
      :src="background.picture.path"
      :class="pictureFitClasses[background.picture.fit]"
      class="pointer-events-none h-full w-full object-center"
    />
  </div>
</template>
