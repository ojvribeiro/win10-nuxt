// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    'radix-vue/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },
})
