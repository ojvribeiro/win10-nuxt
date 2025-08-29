<script setup lang="ts">
  type States = 'idle' | 'hover'

  const taskViewStates = ref<States[]>(['idle', 'hover'])
  const taskViewState = ref<States>('idle')

  function changeTaskViewState(state: States) {
    taskViewState.value = state
  }
</script>

<template>
  <ButtonToolbar
    variant="system"
    class="text-md"
    @mouseover="changeTaskViewState('hover')"
    @mouseout="changeTaskViewState('idle')"
  >
    <Icon
      v-for="state in taskViewStates"
      :key="state"
      :name="`task-view/${state}`"
      class="[shape-rendering:crispEdges]"
      :class="[
        taskViewState === state ? 'opacity-100' : 'opacity-0',
        `item-${state}`,
      ]"
    />
  </ButtonToolbar>
</template>

<style scoped>
  .item-idle {
    transform: translateX(50%);
  }

  .item-hover {
    transform: translateX(-50%);
  }
</style>
