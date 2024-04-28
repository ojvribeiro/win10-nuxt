<script setup lang="ts">
  import type { IconSet } from '~/components/Icon/types'
  import { useNow, useDateFormat } from '@vueuse/core'

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
    class="fixed bottom-0 left-0 h-11 w-screen bg-zinc-900/90 font-light backdrop-blur-md"
  >
    <div class="flex h-full justify-between">
      <div class="flex h-full items-start gap-[3px]">
        <ToolbarAppBar>
          <ToolbarButtonStartMenu />

          <ToolbarButtonTaskView />
        </ToolbarAppBar>

        <div class="flex h-full">
          <ToolbarButton v-for="app in apps" :key="app.icon">
            <Icon :name="app.icon" />
          </ToolbarButton>
        </div>
      </div>

      <div class="flex items-start">
        <ToolbarButtonTaskBar class="mr-2 px-3">
          <div class="flex items-center gap-1">
            <div class="text-3xl">
              <Icon icon="fluent-emoji:cloud-with-rain" />
            </div>

            <div class="flex gap-2 text-sm">
              <div>30°C</div>

              <div>Rainy</div>
            </div>
          </div>
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="px-1">
          <Icon icon="fluent-mdl2:chevron-up-med" class="text-sm" />
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="px-1">
          <Icon icon="fluent-mdl2:devices-3" class="text-lg" />
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="px-1">
          <Icon icon="fluent-mdl2:volume-3" class="text-lg" />
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="px-2">
          <div class="space-y-1 text-xs">
            <div>{{ formattedTime }}</div>
            <div>{{ formattedDate }}</div>
          </div>
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="px-3">
          <Icon icon="fluent-mdl2:action-center" class="text-lg" />
        </ToolbarButtonTaskBar>

        <ToolbarButtonTaskBar class="ml-2 w-[5px] border-l border-white/30">
          <span>&nbsp;</span>
        </ToolbarButtonTaskBar>
      </div>
    </div>
  </div>
</template>
