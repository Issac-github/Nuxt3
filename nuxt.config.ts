// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['nuxt-gtag', '@nuxtjs/robots', 'nuxt-simple-sitemap'],
  devtools: { enabled: true }
})
