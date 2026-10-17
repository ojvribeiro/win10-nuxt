<script setup lang="ts">
const model = defineModel<string>({ default: '' })
</script>

<template>
  <label
    class="flex h-8 items-center border-2 border-white/40 bg-black focus-within:border-accent-light hover:border-white/60 focus-within:hover:border-accent-light"
  >
    <input
      v-model="model"
      type="text"
      placeholder="Find a setting"
      class="h-full min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-white/60"
    />

    <Icon icon="fluent-mdl2:search" class="mr-2 text-sm text-white/80" />
  </label>
</template>
