import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
  meta: {
    link: [{ rel: "icon", href: "/favicon.ico" }],
  },
  css: ["/assets/global.scss"],
  modules: ["@nuxtjs/tailwindcss"],
  webpack: {
    optimizeCSS: true,
  },
  tailwindcss: {
    viewer: false,
  },
});
