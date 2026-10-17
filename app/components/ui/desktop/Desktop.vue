<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
  <div class="isolate">
    <DesktopWallpaper @mousedown="appStore.blur()" />

    <TransitionGroup name="window">
      <Window
        v-for="appWindow in appStore.windows"
        :key="appWindow.appId"
        :app-id="appWindow.appId"
      >
        <component :is="appDefinitions[appWindow.appId].component" />
      </Window>
    </TransitionGroup>
  </div>
</template>
