<script setup lang="ts">
  const toolbar = useToolbar()
</script>

<template>
  <ToolbarButton
    class="hover:text-green-300 active:text-green-500"
    :class="[toolbar.startMenu.isOpen ? 'bg-white/20' : '']"
  >
    <Icon name="brands/windows-mono" class="text-[17px]" />
  </ToolbarButton>
</template>
