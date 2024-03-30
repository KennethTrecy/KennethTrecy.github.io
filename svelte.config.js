import { resolve } from "path"
import adapter from "@sveltejs/adapter-cloudflare"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const configuration = {
	"preprocess": [
		vitePreprocess()
	],
	"kit": {
		"adapter": adapter(),
		"alias": {
			"@/*": resolve("./src"),
			"~/*": resolve("./t")
		}
	}
}

export default configuration
