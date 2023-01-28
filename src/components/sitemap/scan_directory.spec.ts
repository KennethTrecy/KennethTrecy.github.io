import { join } from "path"

import { describe, it, expect } from "vitest"

import scanDirectory from "./scan_directory.server"

describe("Scan directory", () => {
	describe("resolved asynchronously", () => {
		it("can scan directory with transformation", async () => {
			const basePath = "t/data"
			const transformer = (foundPath: string) => {
				if (foundPath.includes("hello")) {
					return Promise.resolve(foundPath.replace("hello", "world"))
				} else {
					return Promise.reject(new Error("Ignored path"))
				}
			}

			const pendingResults = await scanDirectory(basePath, transformer, false)
			const results = await Promise.all(pendingResults)

			expect(results).to.have.length(4)
			expect(results).to.contain(join("t", "data", "world.md"))
			expect(results).to.contain(join("t", "data", "about", "world.md"))
			expect(results).not.to.contain(join("t", "data", "hello.md"))
			expect(results).not.to.contain(join("t", "data", "about", "hello.md"))
			expect(results).to.contain(false)
		})

		it("can scan directory indiscriminately", async () => {
			const basePath = "t/data"
			const transformer = (foundPath: string) => Promise.resolve(foundPath)

			const pendingResults = await scanDirectory(basePath, transformer, false)
			const results = await Promise.all(pendingResults)

			expect(results).to.have.length(4)
			expect(results).to.contain(join("t", "data", "hello.md"))
			expect(results).to.contain(join("t", "data", "world.md"))
			expect(results).to.contain(join("t", "data", "about", "hello.md"))
			expect(results).to.contain(join("t", "data", "about", "world.md"))
			expect(results).not.to.contain(false)
		})
	})

	describe("resolved immediately", () => {
		it("can scan directory with transformation", async () => {
			const basePath = "t/data"
			const transformer = (foundPath: string) => {
				if (foundPath.includes("hello")) {
					return Promise.resolve(foundPath.replace("hello", "world"))
				} else {
					return Promise.reject(new Error("Ignored path"))
				}
			}

			const results = await scanDirectory(basePath, transformer, true)

			expect(results).to.have.length(2)
			expect(results).to.contain(join("t", "data", "world.md"))
			expect(results).to.contain(join("t", "data", "about", "world.md"))
			expect(results).not.to.contain(false)
		})

		it("can scan directory indiscriminately", async () => {
			const basePath = "t/data"
			const transformer = (foundPath: string) => Promise.resolve(foundPath)

			const results = await scanDirectory(basePath, transformer, true)

			expect(results).to.have.length(4)
			expect(results).to.contain(join("t", "data", "hello.md"))
			expect(results).to.contain(join("t", "data", "world.md"))
			expect(results).to.contain(join("t", "data", "about", "hello.md"))
			expect(results).to.contain(join("t", "data", "about", "world.md"))
			expect(results).not.to.contain(false)
		})
	})
})
