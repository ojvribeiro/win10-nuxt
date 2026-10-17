<script setup lang="ts">
const settings = useSettingsStore()

const colors = computed(() => settings.personalization.colors)
</script>

<template>
  <div class="flex flex-col gap-8">
    <section class="flex flex-col gap-3">
      <h2 class="text-xl">Choose your accent color</h2>

      <h3 class="text-sm">Windows colors</h3>

      <SettingsColorGrid v-model="colors.accent" />
    </section>

    <section class="flex flex-col gap-3">
      <h2 class="text-sm">Show accent color on the following surfaces</h2>

      <SettingsCheckbox
        v-model="colors.showAccentOnTitleBars"
        label="Title bars and window borders"
      />
    </section>
  </div>
</template>
