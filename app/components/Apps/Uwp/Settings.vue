<script setup lang="ts">
interface SettingsRoute {
  category: string | null
  page: string | null
}

const currentRoute = ref<SettingsRoute>({ category: null, page: null })
const backStack = ref<SettingsRoute[]>([])

const category = computed(() =>
  settingsCategories.find(
    (settingsCategory) => settingsCategory.slug === currentRoute.value.category
  )
)

function navigate(route: SettingsRoute) {
  if (
    route.category === currentRoute.value.category &&
    route.page === currentRoute.value.page
  ) {
    return
  }

  backStack.value.push(currentRoute.value)

  currentRoute.value = route
}

function back() {
  currentRoute.value = backStack.value.pop() ?? { category: null, page: null }
}

function openCategory(slug: string) {
  const settingsCategory = settingsCategories.find(
    (settingsCategory) => settingsCategory.slug === slug
  )

  navigate({ category: slug, page: settingsCategory?.pages[0]?.slug ?? null })
}
</script>

<template>
  <div class="h-full">
    <Teleport :to="`#${getTitleBarSlotId('settings')}`" defer>
      <button
        v-if="backStack.length"
        class="flex h-full w-12 cursor-default items-center justify-center text-xs text-white hover:bg-white/10 active:bg-white/20"
        @pointerdown.stop
        @click="back"
      >
        <Icon icon="fluent-mdl2:back" />
      </button>
    </Teleport>

    <SettingsHome v-if="!category" @select="openCategory" />

    <SettingsCategoryPage
      v-else
      :category="category"
      :page="currentRoute.page"
      @home="navigate({ category: null, page: null })"
      @navigate="navigate({ category: category.slug, page: $event })"
    />
  </div>
</template>
