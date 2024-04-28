<script setup lang="ts">
  import { twMerge } from 'tailwind-merge'

  interface Props {
    variant?: 'app' | 'system'
    wrapperClasses?: string
  }

  defineOptions({
    inheritAttrs: false,
  })

  const props = withDefaults(defineProps<Props>(), {
    variant: 'app',
    wrapperClasses: '',
  })
</script>

<template>
  <div :class="twMerge(['group block h-full w-12', props.wrapperClasses])">
    <button
      :class="
        twMerge([
          'flex h-full w-[calc(100%_-_1px)] cursor-default items-center justify-center text-white group-hover:bg-white/10',
          props.variant === 'system'
            ? 'active:bg-white/15'
            : 'active:bg-white/5',
        ])
      "
      v-bind="$attrs"
    >
      <slot />
    </button>
  </div>
</template>

<style scoped lang="scss">
  button {
    transition: 0.15s background-color ease-out;

    &:hover {
      transition: 0.005s background-color ease-in;
    }
  }
</style>
