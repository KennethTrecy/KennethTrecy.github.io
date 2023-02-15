import { describe, it, expect } from "vitest"

import type { ViewableOwnerInfoTree } from "@/types/body"

import flattenOwnerTreeInfo from "./flatten_owner_tree_info"

describe("Flatten owner tree info behavior", () => {
	it("can flatten single tree", () => {
		const tree: ViewableOwnerInfoTree[] = [
			{
				"owner": "a",
				"repos": [
					{
						"repo": "b",
						"branches": [
							{
								"branch": "master",
								"paths": [
									"c.ts",
									"d.ts"
								]
							}
						]
					}
				]
			}
		]

		const list = flattenOwnerTreeInfo(tree)

		expect(list).toStrictEqual([
			{
				"owner": "a",
				"repo": "b",
				"branch": "master",
				"path": "c.ts"
			}, {
				"owner": "a",
				"repo": "b",
				"branch": "master",
				"path": "d.ts"
			}
		])
	})

	it("can flatten forest", () => {
		const tree: ViewableOwnerInfoTree[] = [
			{
				"owner": "e",
				"repos": [
					{
						"repo": "f",
						"branches": [
							{
								"branch": "dev",
								"paths": [
									"g.js",
									"h.js"
								]
							}
						]
					}
				]
			}, {
				"owner": "a",
				"repos": [
					{
						"repo": "b",
						"branches": [
							{
								"branch": "master",
								"paths": [
									"c.ts",
									"d.ts"
								]
							}
						]
					}
				]
			}
		]

		const list = flattenOwnerTreeInfo(tree)

		expect(list).toStrictEqual([
			{
				"owner": "e",
				"repo": "f",
				"branch": "dev",
				"path": "g.js"
			}, {
				"owner": "e",
				"repo": "f",
				"branch": "dev",
				"path": "h.js"
			}, {
				"owner": "a",
				"repo": "b",
				"branch": "master",
				"path": "c.ts"
			}, {
				"owner": "a",
				"repo": "b",
				"branch": "master",
				"path": "d.ts"
			}
		])
	})
})
