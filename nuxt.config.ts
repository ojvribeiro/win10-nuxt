// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Windows 10 in Nuxt',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
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
