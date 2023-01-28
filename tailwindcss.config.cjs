/** @type {import("tailwindcss").Config} */
module.exports = {
	"content": [
		"./src/app.html",
		"./src/pages/**/*.svelte",
		"./src/components/**/*.svelte",
		"./src/routes/**/*.svelte"
	],
	"darkMode": "[data-them='dark-logo']",
	"theme": {
		"extend": {
			"container": {
				"padding": {
					"DEFAULT": "4rem"
				}
			}
		}
	},
	"daisyui": {
		"themes": [
			{
				"light-logo": {
					"primary": "#e5d5ff",
					"secondary": "#220055",
					"accent": "#808080",
					"neutral": "#3D4451",
					"base-100": "#FFFFFF",
					"base-200": "#F0F0F0"
				}
			},
			{
				"dark-logo": {
					"primary": "#220055",
					"secondary": "#e5d5ff",
					"accent": "#808080",
					"neutral": "#191D24",
					"base-100": "#2A303C",
					"base-200": "#1B212D"
				}
			}
		]
	},
	"variants": {},
	"plugins": [
		require("@tailwindcss/typography"),
		require("daisyui")
	]
}
