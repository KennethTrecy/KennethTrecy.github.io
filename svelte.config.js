import { resolve } from "path"
import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import("@sveltejs/kit").Config} */
const configuration = {
	"preprocess": vitePreprocess(),

	"kit": {
		"adapter": adapter(),
		"alias": {
			"@/*": resolve("./src/*")
		}
	}
}

export default configuration
