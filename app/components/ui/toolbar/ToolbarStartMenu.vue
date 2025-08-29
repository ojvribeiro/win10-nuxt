<script setup lang="ts">
const toolbar = useToolbarStore()

const tiles = [
  {
    slug: 'browsers',
    name: 'Browsers',
    items: [
      {
        slug: 'google-chrome',
        name: 'Google Chrome',
        icon: 'logos:chrome',
      },
      {
        slug: 'firefox',
        name: 'Firefox',
        icon: 'logos:firefox',
      },
      {
        slug: 'microsoft-edge',
        name: 'Edge',
        icon: 'logos:microsoft-edge',
      },
    ],
  },

  {
    slug: 'utils',
    name: 'Utils',
    items: [
      {
        slug: 'calculator',
        name: 'Calculator',
        icon: 'emojione-v1:pocket-calculator',
      },
    ],
  },
]
</script>

<template>
  <div
    :class="[!toolbar.startMenu.isOpen ? 'pointer-events-none' : '']"
    class="fixed bottom-11 left-0 h-[calc(100vh_-_44px)] min-h-[390px] w-screen overflow-hidden"
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
          <MenuSection :offset="200" class="h-full pt-2">
            <ScrollAreaVertical>
              <ul class="pb-[54px]">
                <li v-for="i in 50" :key="i">
                  <button
                    class="flex h-9 w-full cursor-default items-center gap-1 px-3 text-start text-[13px] hover:bg-white/10"
                  >
                    <Icon icon="fluent:document-32-filled" class="text-2xl" />

                    <span> Item #{{ i }} </span>
                  </button>
                </li>
              </ul>
            </ScrollAreaVertical>
          </MenuSection>
        </div>

        <div>
          <MenuSection :offset="200" class="h-full">
            <ScrollAreaVertical class="pt-4">
              <div class="flex flex-col gap-5 pr-1 pb-[54px]">
                <div
                  v-for="section in tiles"
                  :key="section.slug"
                  class="flex flex-col gap-1"
                >
                  <div class="group flex h-7 items-center justify-between">
                    <label class="text-sm">{{ section.name }}</label>

                    <div class="opacity-0 group-hover:opacity-100">
                      <Icon
                        icon="fluent:re-order-20-regular"
                        class="text-2xl"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-3 gap-1">
                    <div
                      v-for="tile in section.items"
                      :key="tile.slug"
                      class="relative aspect-square w-[100px]"
                    >
                      <label
                        class="absolute right-2 bottom-1 left-2 block text-xs leading-tight"
                      >
                        {{ tile.name }}
                      </label>

                      <div
                        class="absolute top-0 left-0 grid h-full w-full place-items-center border-2 border-transparent bg-white/10 hover:border-white/40"
                      >
                        <Icon :icon="tile.icon" class="text-3xl" />
                      </div>
                    </div>
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
