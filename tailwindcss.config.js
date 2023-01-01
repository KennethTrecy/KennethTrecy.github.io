/** @type {import("tailwindcss").Config} */
module.exports = {
	"content": ["./src/pages/**/*.svelte", "./src/components/**/*.svelte"],
	"darkMode": "dark",
	"theme": {
		"extend": {},
	},
	"variants": {},
	"plugins": [
		require("daisyui"),
	]
}
