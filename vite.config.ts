import type { UserConfig } from "vite"

import { sveltekit } from "@sveltejs/kit/vite"

const configuration: UserConfig = {
	"plugins": [
		sveltekit()
	],
	"test": {
		"include": ["src/**/*.{test,spec}.{js,ts}"]
	}
}

export default configuration
