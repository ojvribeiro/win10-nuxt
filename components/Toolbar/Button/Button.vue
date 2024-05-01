<script setup lang="ts">
  import { twMerge } from 'tailwind-merge'

  interface Props {
    variant?: 'app' | 'system'
    wrapperClasses?: string
    clickableGap?: number
  }

  defineOptions({
    inheritAttrs: false,
  })

  const props = withDefaults(defineProps<Props>(), {
    variant: 'app',
    wrapperClasses: '',
    clickableGap: 0,
  })
</script>

<template>
  <div
    :class="twMerge(['group block h-full', props.wrapperClasses])"
    :style="{
      width: `calc(48px + ${props.clickableGap}px)`,
    }"
  >
    <button
      :class="
        twMerge([
          'flex h-full cursor-default items-center justify-center text-white group-hover:bg-white/10',
          props.variant === 'system'
            ? 'group-active:bg-white/15'
            : 'group-active:bg-white/5',
        ])
      "
      :style="{
        width: `calc(100% - ${props.clickableGap}px)`,
      }"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </div>
</template>

<style scoped>
  button {
    transition: 0.15s background-color ease-out;
  }

  button:hover {
    transition: 0.005s background-color ease-in;
  }
</style>
