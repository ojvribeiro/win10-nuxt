<script setup lang="ts">
interface Props {
  label: string
}

const props = defineProps<Props>()

const model = defineModel<boolean>({ default: false })

const id = useId()
</script>

<template>
  <div class="flex items-center gap-3">
    <RekaCheckboxRoot
      :id="id"
      v-model="model"
      class="grid h-5 w-5 cursor-default place-items-center border-2 border-white/80 outline-none hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white data-[state=checked]:border-accent data-[state=checked]:bg-accent"
    >
      <RekaCheckboxIndicator class="flex">
        <Icon icon="fluent-mdl2:check-mark" class="text-xs text-white" />
      </RekaCheckboxIndicator>
    </RekaCheckboxRoot>

    <label :for="id" class="text-sm">{{ props.label }}</label>
  </div>
</template>
