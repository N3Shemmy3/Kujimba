// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		buildAssetsDir: "/_nuxt/",
		head: {
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "https://api.iconify.design/map:gym.svg?color=%23888888",
				},
			],
		},
	},
	devtools: { enabled: true },
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@nuxtjs/supabase",
		"@pinia/nuxt",
	],

	css: ["@/assets/css/tailwind.css", "@/assets/fonts/product.css"],
	plugins: [
		"@/plugins/vRipple.js", // only in client side
	],
});
