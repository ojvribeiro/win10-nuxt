<script setup lang="ts">
import type { BackgroundFit, BackgroundType } from '~/stores/settings'

const settings = useSettingsStore()

const background = computed(() => settings.personalization.background)

const typeOptions: { value: BackgroundType; label: string }[] = [
  { value: 'picture', label: 'Picture' },
  { value: 'solid', label: 'Solid color' },
]

const fitOptions: { value: BackgroundFit; label: string }[] = [
  { value: 'fill', label: 'Fill' },
  { value: 'fit', label: 'Fit' },
  { value: 'stretch', label: 'Stretch' },
  { value: 'tile', label: 'Tile' },
  { value: 'center', label: 'Center' },
  { value: 'span', label: 'Span' },
]

const { open: browse, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false,
  reset: true,
})

onChange((files) => {
  const file = files?.[0]

  if (!file) {
    return
  }

  settings.addRecentPicture(URL.createObjectURL(file))
})
</script>

<template>
  <div class="flex flex-col gap-7">
    <SettingsBackgroundPreview />

    <section class="flex flex-col gap-2">
      <h2 class="text-sm">Background</h2>

      <SettingsSelect v-model="background.type" :options="typeOptions" />
    </section>

    <template v-if="background.type === 'picture'">
      <section class="flex flex-col gap-2">
        <h2 class="text-sm">Choose your picture</h2>

        <div class="flex flex-wrap gap-1">
          <button
            v-for="picture in background.recentPictures"
            :key="picture"
            :class="[
              picture === background.picture.path
                ? 'border-accent-light'
                : 'border-transparent hover:border-white/40',
            ]"
            class="h-23 w-23 cursor-default border-2"
            @click="background.picture.path = picture"
          >
            <NuxtImg
              :src="picture"
              class="pointer-events-none h-full w-full object-cover"
            />
          </button>
        </div>

        <SettingsButton class="mt-2" @click="browse()">Browse</SettingsButton>
      </section>

      <section class="flex flex-col gap-2">
        <h2 class="text-sm">Choose a fit</h2>

        <SettingsSelect
          v-model="background.picture.fit"
          :options="fitOptions"
        />
      </section>
    </template>

    <section v-else class="flex flex-col gap-2">
      <h2 class="text-sm">Choose your background color</h2>

      <SettingsColorGrid v-model="background.solid.color" />
    </section>
  </div>
</template>
