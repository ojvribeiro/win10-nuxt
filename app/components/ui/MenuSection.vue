<template>
  <div class="menu-section">
    <slot />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    offset?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    offset: 400,
  })

  const _offset = computed<string>(() => `${props.offset}px`)
</script>

<style scoped>
  * {
    --offset: translateY(v-bind(_offset));
  }
</style>
