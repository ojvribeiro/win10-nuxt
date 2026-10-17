<script setup lang="ts">
const emit = defineEmits<{
  select: [slug: string]
}>()

const search = ref('')

const categories = computed(() => {
  const query = search.value.trim().toLowerCase()

  if (!query) {
    return settingsCategories
  }

  return settingsCategories.filter((category) =>
    `${category.name} ${category.description}`.toLowerCase().includes(query)
  )
})
</script>

<template>
  <ScrollAreaVertical>
    <div class="mx-auto max-w-[1200px] px-6 pb-10">
      <h1 class="py-6 text-center text-[28px]">Windows Settings</h1>

      <SettingsSearch v-model="search" class="mx-auto max-w-[360px]" />

      <div
        class="mt-10 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-x-2 gap-y-4"
      >
        <button
          v-for="category in categories"
          :key="category.slug"
          :disabled="!category.pages.length"
          :title="category.pages.length ? undefined : 'Not available yet'"
          class="flex cursor-default items-start gap-4 border-2 border-transparent p-3 text-start hover:border-white/30 active:bg-white/10 disabled:opacity-40 disabled:hover:border-transparent disabled:active:bg-transparent"
          @click="emit('select', category.slug)"
        >
          <Icon
            :icon="category.icon"
            class="shrink-0 text-[30px] text-accent-light"
          />

          <div class="flex flex-col gap-0.5">
            <span class="text-[15px]">{{ category.name }}</span>

            <span class="text-xs text-white/60">
              {{ category.description }}
            </span>
          </div>
        </button>
      </div>

      <p v-if="!categories.length" class="text-center text-sm text-white/60">
        No results for "{{ search }}"
      </p>
    </div>
  </ScrollAreaVertical>
</template>
