<script setup lang="ts">
const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="grid w-fit grid-cols-[repeat(8,48px)] gap-0.5">
    <button
      v-for="color in windowsColors"
      :key="color"
      :style="{ backgroundColor: color }"
      :title="color"
      :class="[
        color.toLowerCase() === model.toLowerCase()
          ? 'border-white'
          : 'border-transparent hover:border-white/60',
      ]"
      class="grid h-12 w-12 cursor-default place-items-center border-2"
      @click="model = color"
    >
      <Icon
        v-if="color.toLowerCase() === model.toLowerCase()"
        icon="fluent-mdl2:check-mark"
        class="text-sm text-white"
      />
    </button>
  </div>
</template>
