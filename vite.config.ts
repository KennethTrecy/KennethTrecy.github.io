import type { UserConfig } from "vite"

import { sveltekit } from "@sveltejs/kit/vite"

const configuration: UserConfig = {
	"plugins": [
		sveltekit()
	],
	"server": {
		"port": Number(process.env.PORT || "7000")
	},
	"test": {
		"include": ["src/**/*.{test,spec}.{js,ts}"]
	}
}

export default configuration
