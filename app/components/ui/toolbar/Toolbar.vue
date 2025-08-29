<script setup lang="ts">
  import { useDateFormat, useNow } from '@vueuse/core'
  import type { IconSet } from '~/components/Icon/types'

  const toolbar = useToolbarStore()

  const formattedTime = useDateFormat(useNow(), 'HH:mm')
  const formattedDate = useDateFormat(useNow(), 'DD/MM/YYYY')

  const apps = ref<
    {
      name: string
      icon: IconSet['name']
    }[]
  >([
    {
      name: 'Google Chrome',
      icon: 'brands/chrome',
    },
    {
      name: 'Visual Studio Code',
      icon: 'brands/vscode',
    },
  ])
</script>

<template>
  <div
    class="fixed bottom-0 left-0 h-11 w-screen bg-[#212121]/95 font-light backdrop-blur-md"
  >
    <div class="flex h-full justify-between">
      <div class="flex h-full items-start gap-[3px]">
        <ToolbarAppBar>
          <ButtonToolbarStartMenu
            @click="toolbar.startMenu.isOpen = !toolbar.startMenu.isOpen"
          />

          <ButtonToolbarTaskView />
        </ToolbarAppBar>

        <ToolbarAppBar>
          <ButtonToolbar v-for="app in apps" :key="app.icon" :clickable-gap="1">
            <Icon :name="app.icon" />
          </ButtonToolbar>
        </ToolbarAppBar>
      </div>

      <ToolbarTaskBar>
        <ButtonToolbarTaskbar class="mr-2 px-3">
          <div class="flex items-center gap-1">
            <div class="text-3xl">
              <Icon icon="fluent-emoji:cloud-with-rain" />
            </div>

            <div class="flex gap-2 text-sm">
              <div>30°C</div>

              <div>Rainy</div>
            </div>
          </div>
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="px-1">
          <Icon icon="fluent-mdl2:chevron-up-med" class="text-sm" />
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="px-1">
          <Icon icon="fluent-mdl2:devices-3" class="text-lg" />
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="px-1">
          <Icon icon="fluent-mdl2:volume-3" class="text-lg" />
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="px-2">
          <div class="space-y-1 text-xs">
            <div>{{ formattedTime }}</div>
            <div>{{ formattedDate }}</div>
          </div>
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="px-3">
          <Icon icon="fluent-mdl2:action-center" class="text-lg" />
        </ButtonToolbarTaskbar>

        <ButtonToolbarTaskbar class="ml-2 w-[5px] border-l border-white/30">
          <span>&nbsp;</span>
        </ButtonToolbarTaskbar>
      </ToolbarTaskBar>
    </div>
  </div>
</template>
