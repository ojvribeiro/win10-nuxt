<script setup lang="ts">
  const toolbar = useToolbar()
</script>

<template>
  <div
    class="fixed bottom-11 left-0 h-[calc(100vh_-_44px)] w-screen overflow-hidden"
    :class="[!toolbar.startMenu.isOpen ? 'pointer-events-none' : '']"
  >
    <div
      class="absolute left-0 top-0 h-full w-full"
      @mousedown="toolbar.startMenu.isOpen = false"
    />

    <Transition name="start-menu">
      <div
        v-if="toolbar.startMenu.isOpen"
        class="absolute bottom-0 left-0 h-[80%] w-[650px] bg-zinc-900/90 text-white backdrop-blur-md"
      >
        <div class="flex h-full w-full justify-start gap-3">
          <div class="h-full w-12">
            <div class="flex h-full w-full flex-col justify-between">
              <div class="pt-1">
                <ToolbarButton variant="system" class="text-md h-12 w-full">
                  <Icon icon="fluent-mdl2:global-nav-button" />
                </ToolbarButton>
              </div>

              <div class="flex w-full flex-col">
                <div>
                  <ToolbarButton variant="system" class="text-md h-12 w-full">
                    <Icon icon="fluent-mdl2:settings" />
                  </ToolbarButton>
                </div>

                <div>
                  <ToolbarButton
                    variant="system"
                    class="text-md h-12 w-full text-lg"
                  >
                    <Icon icon="fluent-mdl2:power-button" />
                  </ToolbarButton>
                </div>
              </div>
            </div>
          </div>

          <div class="h-full w-[270px]">
            <div class="section block h-full overflow-y-scroll pt-2">
              <ul class="">
                <li v-for="i in 50" :key="i">
                  <button
                    class="h-9 w-full cursor-default px-3 text-start hover:bg-white/10"
                  >
                    Item #{{ i }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .start-menu-enter-active {
    transition:
      transform 900ms cubic-bezier(0.08, 0.915, 0.005, 0.985),
      opacity 250ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-leave-active {
    transition: 150ms cubic-bezier(0.295, 0.485, 0, 0.975);
  }

  .start-menu-enter-from,
  .start-menu-leave-to {
    opacity: 0;
    transform: translateY(80px);
  }

  .start-menu-enter-active .section,
  .start-menu-leave-active .section {
    transition: all 450ms cubic-bezier(0.08, 0.915, 0.005, 0.985);
  }

  .start-menu-enter-from .section,
  .start-menu-leave-to .section {
    transform: translateY(460px) scaleY(1.8);
    opacity: 0;
  }
</style>
