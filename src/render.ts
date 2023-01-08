/// @ts-ignore
import App from "page"

import { readFile, writeFile } from "node:fs/promises"

async function main() {
	console.log(App.render())
}

main()
