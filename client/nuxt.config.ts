// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})

// module.exports = {
//   devServer: {
//     open: process.platform === 'darwin',
//     host: '0.0.0.0',
//     port: 443, // CHANGE YOUR PORT HERE!
//     https: true,
//     hotOnly: false,
//   },
// }