// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        'vuetify/lib/styles/main.sass',
    ],
    modules: [
        ['@pinia/nuxt', {
            autoImports: ['defineStore']
        }],
    ],
    build: {
        transpile: ['vuetify'],
      },
      vite: {
          define: {
              'process.env.DEBUG': false,
          },
      },
})
