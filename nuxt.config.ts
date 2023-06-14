// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@nuxtjs/supabase",
		"@pinia/nuxt",
	],

	plugins: [
		"@/plugins/vRipple.js", // only in client side
	],
});
