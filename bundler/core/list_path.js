import { join } from "path"
import { readdir } from "node:fs/promises"

export default async function listPath(basePath, inputPath, outputPath) {
	const paths = []

	try {
		const pendingLists = []
		const files = await readdir(join(basePath, inputPath), { "withFileTypes": true })
		for (const file of files) {
			const relativeInputPath = join(inputPath, file.name)
			const relativeOutputPath = join(outputPath, file.name)
			if (file.isFile()) {
				paths.push({
					"input": relativeInputPath,
					"output": relativeOutputPath
				})
			} else {
				pendingLists.push(listPath(basePath, relativeInputPath, relativeOutputPath))
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
