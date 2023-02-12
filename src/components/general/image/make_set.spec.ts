import { describe, expect, it } from "vitest"

import type { MultimediaLink } from "@/types/content"

import makeSet from "./make_set"

describe("Make set behavior", () => {
	it("can generate source set for multiple images", () => {
		const links: MultimediaLink[] = [
			{
				"densityPerPixel": 4,
				"link": "A"
			}, {
				"densityPerPixel": 5,
				"link": "B"
			}, {
				"densityPerPixel": 8,
				"link": "C"
			}
		]

		const sourceSet = makeSet(links)

		expect(sourceSet).toBe("A 1x, B 1.25x, C 2x")
	})

	it("can generate source set for single image", () => {
		const links: MultimediaLink[] = [
			{
				"densityPerPixel": 1,
				"link": "A"
			}
		]

		const sourceSet = makeSet(links)

		expect(sourceSet).toBeUndefined()
	})
})
