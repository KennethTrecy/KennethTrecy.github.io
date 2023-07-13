import type { UserConfig } from "vite"

import { sveltekit } from "@sveltejs/kit/vite"

const configuration: UserConfig = {
	"plugins": [
		sveltekit()
	],
	"server": {
		"host": true,
		"port": 8000,
		"open": false,
		"watch": {
			"usePolling": true
		}
	},
	"test": {
		"include": [ "src/**/*.spec.ts" ]
	}
});
