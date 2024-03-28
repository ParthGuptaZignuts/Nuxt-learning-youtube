  export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/axios',
    ],
    axios: {
      baseURL: 'https://fakestoreapi.com',
    },
  })