<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  variant?: 'default' | 'close'
  class?: string | string[]
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <button
    :class="
      twMerge([
        'flex h-full w-11.5 cursor-default items-center justify-center text-[10px]',
        props.variant === 'close'
          ? 'hover:bg-[#e81123] hover:text-white active:bg-[#f1707a] active:text-black'
          : 'hover:bg-white/10 active:bg-white/20',
        props.class,
      ])
    "
    v-bind="$attrs"
    @pointerdown.stop
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  transition: 0.15s background-color ease-out;
}

button:hover {
  transition: 0.005s background-color ease-in;
}
</style>
