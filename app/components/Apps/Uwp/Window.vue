<script setup lang="ts">
const dragHandle = useTemplateRef('dragHandle')

const { style } = useDraggable(dragHandle)
</script>

<template>
  <div :style="style" class="fixed h-28 w-28 shadow-xl">
    <div ref="dragHandle" class="h-9 w-full bg-white">Title</div>
  </div>
</template>
