<script setup lang="ts" generic="T extends string">
interface Props {
  options: { value: T; label: string }[]
}

const props = defineProps<Props>()

const model = defineModel<T>({ required: true })
</script>

<template>
  <RekaSelectRoot v-model="model">
    <RekaSelectTrigger
      class="flex h-8 w-67 cursor-default items-center justify-between border-2 border-white/40 bg-black px-2 text-sm text-white outline-none hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white data-[state=open]:border-white/70"
    >
      <RekaSelectValue />

      <RekaSelectIcon>
        <Icon icon="fluent-mdl2:chevron-down" class="text-xs" />
      </RekaSelectIcon>
    </RekaSelectTrigger>

    <RekaSelectPortal>
      <RekaSelectContent
        class="z-50 min-w-67 border border-white/20 bg-[#2b2b2b] py-1 text-sm text-white shadow-[0_8px_24px_-4px_rgba(0,0,0,0.8)] select-none"
      >
        <RekaSelectViewport>
          <RekaSelectItem
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            class="flex h-8 cursor-default items-center px-3 outline-none data-highlighted:bg-white/10 data-[state=checked]:bg-accent-dark"
          >
            <RekaSelectItemText>{{ option.label }}</RekaSelectItemText>
          </RekaSelectItem>
        </RekaSelectViewport>
      </RekaSelectContent>
    </RekaSelectPortal>
  </RekaSelectRoot>
</template>
