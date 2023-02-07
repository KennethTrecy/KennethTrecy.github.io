import type { PlaywrightTestConfig } from "@playwright/test"

const configuration: PlaywrightTestConfig = {
	"webServer": {
		"command": "npm run preview",
		"port": 4173
	},
	"testDir": "t/e2e"
}

export default configuration
