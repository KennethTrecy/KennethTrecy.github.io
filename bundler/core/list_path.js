import { readdir } from "node:fs/promises"

export default async function listPath(basePath) {
	const paths = []

	try {
		const pendingLists = []
		const files = await readdir(basePath, { "withFileTypes": true })
		for (const file of files) {
			const completePath = `${basePath}/${file.name}`
			if (file.isFile()) {
				paths.push(completePath)
			} else {
				pendingLists.push(listPath(completePath))
			}
		}

		return [
			...paths,
			...(await Promise.all(pendingLists)).flat()
		]
	} catch(error) {
		console.error("There is a problem on listing the files.")
		throw error
	}
}
