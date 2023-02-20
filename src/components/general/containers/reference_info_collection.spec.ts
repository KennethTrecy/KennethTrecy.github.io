/* eslint-disable max-lines-per-function */
// @vitest-environment jsdom

import type { ReferenceInfo } from "@/types/reference"

import { cleanup } from "@testing-library/svelte"
import { get } from "svelte/store"
import { describe, expect, it } from "vitest"

import { appendReference, referenceInfos } from "./reference_info_collection"

describe("Primary heading behavior", () => {
	it("can put mutiple references", () => {
		referenceInfos.set([])

		const referenceA: ReferenceInfo = {
			"title": "Reference A",
			"link": "https://example.com/reference_a",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			},
			"license": {
				"name": "example",
				"link": "https://example.com/license_example"
			}
		}
		const referenceB: ReferenceInfo = {
			"title": "Reference B",
			"link": "https://example.com/reference_b",
			"author": {
				"groupName": "B",
				"link": "https://example.com/b"
			},
			"license": {
				"name": "example",
				"link": "https://example.com/license_example"
			}
		}

		appendReference(referenceA)
		appendReference(referenceB)

		expect(get(referenceInfos)).toStrictEqual([
			referenceA,
			referenceB
		])

		cleanup()
	})

	it("cannot put repeating references", () => {
		referenceInfos.set([])

		const referenceA: ReferenceInfo = {
			"title": "Repeating Reference A",
			"link": "https://example.com/repeating_reference_a",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			},
			"license": {
				"name": "example",
				"link": "https://example.com/license_example"
			}
		}
		const referenceB: ReferenceInfo = {
			"title": "Reference B",
			"link": "https://example.com/reference_b",
			"author": {
				"groupName": "B",
				"link": "https://example.com/b"
			},
			"license": {
				"name": "example",
				"link": "https://example.com/license_example"
			}
		}

		appendReference(referenceA)
		appendReference(referenceB)
		appendReference(referenceA)

		expect(get(referenceInfos)).toStrictEqual([
			referenceA,
			referenceB
		])

		cleanup()
	})
})
