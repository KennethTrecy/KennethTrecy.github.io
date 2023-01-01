/** @type {import("tailwindcss").Config} */
module.exports = {
	"content": ["./src/pages/**/*.svelte", "./src/components/**/*.svelte"],
	"darkMode": "dark",
	"theme": {
		"extend": {
			"primary": "#220055",
			"secondary": "#e5d5ff",
			"accent": "#808080"
		},
	},
	"variants": {},
	"plugins": [
		require("daisyui"),
	]
}
