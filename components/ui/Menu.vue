<template>
  <Transition name="menu">
    <div
      v-if="isOpen"
      class="absolute bottom-0 left-0 h-[80%] bg-[#272626]/90 text-white shadow-[0px_4px_20px_-8px_#000] backdrop-blur-lg"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
  const isOpen = defineModel<boolean>()
</script>

<style scoped>
  @import '~/assets/css/animations/menu.css';
</style>
