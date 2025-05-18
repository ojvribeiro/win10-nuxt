import tailwindcss from "@tailwindcss/vite";

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
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'radix-vue/nuxt',
  ],

  css: ['~/assets/css/tailwind.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-05-17'
})
