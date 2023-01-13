import { join, normalize } from "path"
import { execSync } from "child_process"
import { readFile } from "fs/promises"

/// @ts-ignore
import App from "page"

import { ROOT, PRERENDER } from "../../core/paths"

async function main() {
	const relativePath = __filename.slice(join(ROOT, PRERENDER).length + 1)
	const prerenderOutput = join(ROOT, PRERENDER, relativePath.replace(".js", ".html"))

	const rawTemplate = readFile(join(ROOT, "src/multimedia/index.html"), { "encoding": "utf-8" })
	const { head, html } = App.render()

	const prerenderedFile = (await rawTemplate)
		.replace("${head}", head)
		.replace("${body}", html)

	execSync("npm run production:full", {
		"env": {
			"PRERENDERED_TEMPLATE": prerenderedFile,
			"PRERENDERED_RELATIVE_PATH": normalize(relativePath).replace(".js", ".svelte")
		},
		"stdio": "inherit"
	})
}

main()
