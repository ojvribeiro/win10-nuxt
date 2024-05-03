<script setup lang="ts">
  const toolbar = useToolbar()
</script>

<template>
  <ToolbarButton
    class="hover:text-[#68e3a8] active:text-[#00cc6a]"
    :class="[
      toolbar.startMenu.isOpen ? 'bg-white/20 group-hover:bg-white/20' : '',
    ]"
  >
    <Icon name="brands/windows-mono" class="text-[17px]" />
  </ToolbarButton>
</template>
