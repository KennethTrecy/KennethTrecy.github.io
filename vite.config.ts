import type { UserConfig } from "vite"

import { sveltekit } from "@sveltejs/kit/vite"

const configuration: UserConfig = {
	"plugins": [
		sveltekit()
	],
	"server": {
		"port": Number(process.env.PORT || "7000"),
		"hmr": {
			"clientPort": 7000,
			"port": 7000,
			"host": "0.0.0.0",
			"protocol": "ws"
		}
	},
	"test": {
		"include": ["src/**/*.spec.ts"]
	}
}

export default configuration
