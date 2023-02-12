/* eslint-disable max-lines-per-function */
import { describe, expect, it } from "vitest"

import type { MultimediaLink } from "@/types/content"

import makeSet from "./make_set"

describe("Make set behavior", () => {
	it("can generate source set from multiple link", () => {
		const links: MultimediaLink[] = [
			{
				"intrinsicWidth": 400,
				"link": "A"
			}, {
				"intrinsicWidth": 500,
				"link": "B"
			}, {
				"intrinsicWidth": 800,
				"link": "C"
			}
		]

		const sourceSet = makeSet(links)

		expect(sourceSet).toBe("A 400w, B 500w, C 800w")
	})

	it("cannot generate source set for single link", () => {
		const links: MultimediaLink[] = [
			{
				"intrinsicWidth": 400,
				"link": "A"
			}
		]

		const sourceSet = makeSet(links)

		expect(sourceSet).toBe("")
	})
})
