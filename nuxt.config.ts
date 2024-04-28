// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  devtools: { enabled: true },
})
