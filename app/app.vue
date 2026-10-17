<script setup lang="ts">
const settings = useSettingsStore()

// Set on <html> so teleported content (selects, dialogs) also gets the accent
useHead({
  htmlAttrs: {
    style: () => `--color-accent: ${settings.personalization.colors.accent}`,
  },
})
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-screen overflow-hidden select-none">
    <Desktop />

    <ToolbarStartMenu />

    <Toolbar />
  </div>
</template>

<style>
html,
body {
  font-family: 'Segoe UI Light';
}
</style>
