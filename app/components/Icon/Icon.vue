<script setup lang="ts">
import type { IconProps } from '@iconify/vue'
import type { IconSet } from './types'
import { Icon as IconifyIcon } from '@iconify/vue'
import { twMerge } from 'tailwind-merge'

export interface Props extends Partial<IconProps> {
  name?: IconSet['name']
  format?: 'svg' | 'png'
  renderAs?: 'raw' | 'url'
  class?: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  format: 'svg',
  renderAs: 'raw',
  class: '',
})

const iconUrl = ref<string>('')
const iconsImport = ref<Record<string, () => Promise<unknown>>>({})

const isRaw = computed(() => {
  if (props.format === 'svg' || props.renderAs === 'raw') {
    return true
  }

  return false
})

const isUrl = computed(() => {
  if (props.format === 'png' || props.renderAs === 'url') {
    return true
  }

  return false
})

async function getIcon() {
  try {
    let currentFormat: string = 'svg'

    if (props.format === 'svg' && isRaw.value) {
      iconsImport.value = import.meta.glob('../../assets/icons/**/**.svg', {
        import: 'default',
        query: '?raw',
      })

      currentFormat = 'svg'
    }

    if (props.format === 'svg' && isUrl.value) {
      iconsImport.value = import.meta.glob('../../assets/icons/**/**.svg', {
        import: 'default',
        query: '?url',
      })

      currentFormat = 'svg'
    }

    if (props.format === 'png') {
      iconsImport.value = import.meta.glob('../../assets/icons/**/**.png', {
        import: 'default',
        query: '?url',
      })

      currentFormat = 'png'
    }

    const iconTransformedPath = (await iconsImport.value[
      `../../assets/icons/${props.name}.${currentFormat || ''}`
    ]?.()) as string

    iconUrl.value = iconTransformedPath
  } catch {
    if (props.name) {
      console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
    }
  }
}

await getIcon()

watchEffect(getIcon)

const resolvedClasses = computed(() => {
  const defaultClasses = `
      icon
      inline-block
      align-middle
      h-[1em] w-[1em]
      [&>svg]:h-[1em] [&>svg]:w-[1em]
      [&>svg]:fill-current

    `

  return twMerge(defaultClasses, props.class as string)
})

const shouldRenderRaw = computed(
  () =>
    (props.renderAs === 'raw' && props.format !== 'png') ||
    (props.format === 'svg' && !isRaw.value) ||
    (props.format === 'png' && !isUrl.value)
)
</script>

<template>
  <span
    v-if="!props.icon"
    :class="[resolvedClasses]"
    :style="isUrl ? { 'background-image': `url(${iconUrl})` } : {}"
    v-html="shouldRenderRaw ? iconUrl : ''"
  />

  <IconifyIcon v-else :icon="props.icon" :class="resolvedClasses" />
</template>

<style scoped>
span.icon {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
