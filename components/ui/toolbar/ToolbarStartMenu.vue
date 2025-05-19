<script setup lang="ts">
  const toolbar = useToolbarStore()
</script>

<template>
  <div
    class="fixed bottom-11 left-0 h-[calc(100vh_-_44px)] min-h-[390px] w-screen overflow-hidden"
    :class="[!toolbar.startMenu.isOpen ? 'pointer-events-none' : '']"
  >
    <div
      class="absolute top-0 left-0 h-full w-full"
      @mousedown="toolbar.startMenu.isOpen = false"
    />

    <Menu v-model="toolbar.startMenu.isOpen">
      <div class="flex h-full w-full justify-start gap-3">
        <div class="h-full w-12">
          <div class="flex h-full w-full flex-col justify-between">
            <div class="pt-1">
              <ButtonToolbar variant="system" class="text-md h-12 w-full">
                <Icon icon="fluent-mdl2:global-nav-button" />
              </ButtonToolbar>
            </div>

            <div class="flex w-full flex-col">
              <div>
                <ButtonToolbar variant="system" class="text-md h-12 w-full">
                  <Icon icon="fluent-mdl2:settings" />
                </ButtonToolbar>
              </div>

              <div>
                <ButtonToolbar
                  variant="system"
                  class="text-md h-12 w-full text-lg"
                >
                  <Icon icon="fluent-mdl2:power-button" />
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>

        <div class="h-full w-[270px]">
          <MenuSection class="h-full pt-2">
            <ScrollAreaVertical>
              <ul>
                <li v-for="i in 50" :key="i">
                  <button
                    class="h-9 w-full cursor-default px-3 text-start hover:bg-white/10"
                  >
                    Item #{{ i }}
                  </button>
                </li>
              </ul>
            </ScrollAreaVertical>
          </MenuSection>
        </div>

        <div>
          <MenuSection :offset="200" class="h-full">
            <ScrollAreaVertical class="pt-4">
              <div class="flex flex-col gap-5 pr-1">
                <div v-for="_ in 3" class="flex flex-col gap-1">
                  <div class="flex h-7 items-center justify-between">
                    <label class="text-sm">Section</label>

                    <div>
                      <Icon
                        icon="fluent:re-order-20-regular"
                        class="text-2xl"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-3 gap-1">
                    <div
                      v-for="_ in 9"
                      class="aspect-square w-[100px] border-white/40 bg-white/10 hover:border-2"
                    ></div>
                  </div>
                </div>
              </div>
            </ScrollAreaVertical>
          </MenuSection>
        </div>
      </div>
    </Menu>
  </div>
</template>
