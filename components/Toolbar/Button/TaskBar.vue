<template>
  <button
    class="block h-full w-fit cursor-default text-white hover:bg-white/10 active:bg-white/20"
  >
    <div class="flex h-full w-full items-center justify-center">
      <slot />
    </div>
  </button>
</template>

<style scoped lang="scss">
  button {
    transition: 0.12s background-color ease-out;

    &:hover {
      transition: 0.02s background-color ease-in;
    }
  }
</style>
