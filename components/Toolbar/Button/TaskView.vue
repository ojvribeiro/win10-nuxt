<template>
  <ToolbarButton
    variant="system"
    @mouseover="changeTaskViewState('hover')"
    @mouseout="changeTaskViewState('idle')"
  >
    <Icon
      v-for="state in taskViewStates"
      :key="state"
      :name="`task-view/${state}`"
      :class="[
        'text-md [shape-rendering:crispEdges]',
        taskViewState === state ? 'opacity-100' : 'opacity-0',
        `item-${state}`,
      ]"
    />
  </ToolbarButton>
</template>

<script setup lang="ts">
  type States = 'idle' | 'hover'

  const taskViewStates = ref<States[]>(['idle', 'hover'])
  const taskViewState = ref<States>('idle')

  function changeTaskViewState(state: States) {
    taskViewState.value = state
  }
</script>

<style scoped lang="scss">
  .item {
    &-idle {
      transform: translateX(50%);
    }

    &-hover {
      transform: translateX(-50%);
    }
  }
</style>
