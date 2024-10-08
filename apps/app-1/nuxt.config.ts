// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@monorepo/packages'],
	compatibilityDate: '2024-08-08',
	devtools: { enabled: true },
})
