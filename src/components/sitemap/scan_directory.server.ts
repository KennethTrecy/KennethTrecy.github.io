import { readdir } from "node:fs/promises"
import { join, resolve } from "path"

export default async function scanDirectory<T extends boolean>(
	basePath: string,
	check: (path: string) => Promise<string|false>,
	mustFilterImmediately: T
): Promise<T extends true ? string[] : Promise<string|false>[]> {
	const nodes = await readdir(basePath, {
		"encoding": "utf-8",
		"withFileTypes": true
	})

	const checkedPaths: Promise<string|false>[] = []
	const checkedGroupPaths: Promise<Promise<string|false>[]>[] = []

	for (const node of nodes) {
		const completePath = join(basePath, node.name)
		if (node.isFile()) {
			checkedPaths.push(check(completePath).catch(() => Promise.resolve(false)))
		} else if (node.isDirectory()) {
			checkedGroupPaths.push(scanDirectory(completePath, check, false))
		}
	}

	const pendingPaths = [
		...checkedPaths,
		...(await Promise.all(checkedGroupPaths)).flat()
	]

	if (mustFilterImmediately) {
		const checkedPaths = await Promise.all(pendingPaths)
		const passedPaths = checkedPaths.filter(Boolean)

		return passedPaths as T extends true ? string[] : Promise<string|false>[]
	} else {
		return pendingPaths as T extends true ? string[] : Promise<string|false>[]
	}
}
