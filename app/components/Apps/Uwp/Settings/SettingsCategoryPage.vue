<script setup lang="ts">
import type { SettingsCategory } from '~/utils/settings'

interface Props {
  category: SettingsCategory
  page: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  home: []
  navigate: [slug: string]
}>()

const currentPage = computed(() =>
  props.category.pages.find((page) => page.slug === props.page)
)
</script>

<template>
  <div class="@container flex h-full">
    <nav class="hidden w-75 shrink-0 flex-col bg-white/5 py-2 @3xl:flex">
      <button
        class="flex h-10 cursor-default items-center gap-4 px-4 text-sm hover:bg-white/10 active:bg-white/20"
        @click="emit('home')"
      >
        <Icon icon="fluent-mdl2:home" class="text-base" />

        <span>Home</span>
      </button>

      <h2 class="px-4 pt-5 pb-2 text-sm font-semibold">
        {{ props.category.name }}
      </h2>

      <button
        v-for="categoryPage in props.category.pages"
        :key="categoryPage.slug"
        class="relative flex h-10 cursor-default items-center gap-4 px-4 text-sm hover:bg-white/10 active:bg-white/20"
        @click="emit('navigate', categoryPage.slug)"
      >
        <span
          v-if="categoryPage.slug === props.page"
          class="absolute top-2 bottom-2 left-0 w-1 bg-accent-light"
        />

        <Icon :icon="categoryPage.icon" class="text-base" />

        <span>{{ categoryPage.name }}</span>
      </button>
    </nav>

    <div class="min-w-0 flex-1">
      <ScrollAreaVertical>
        <div class="max-w-190 px-6 pt-3 pb-10 @3xl:px-10">
          <div class="flex gap-5 pb-3 text-sm @3xl:hidden">
            <button
              v-for="categoryPage in props.category.pages"
              :key="categoryPage.slug"
              :class="[
                categoryPage.slug === props.page
                  ? 'border-accent-light'
                  : 'border-transparent text-white/60 hover:text-white',
              ]"
              class="cursor-default border-b-2 py-1"
              @click="emit('navigate', categoryPage.slug)"
            >
              {{ categoryPage.name }}
            </button>
          </div>

          <h1 class="pb-5 text-[28px]">{{ currentPage?.name }}</h1>

          <SettingsBackground v-if="props.page === 'background'" />

          <SettingsColors v-else-if="props.page === 'colors'" />
        </div>
      </ScrollAreaVertical>
    </div>
  </div>
</template>
