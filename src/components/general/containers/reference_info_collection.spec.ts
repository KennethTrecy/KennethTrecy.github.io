/* eslint-disable max-lines-per-function */
// @vitest-environment jsdom

import type { ReferenceInfo } from "@/types/reference"

import { describe, it, expect } from "vitest"
import { render, cleanup } from "@testing-library/svelte"

import { referenceInfo } from "./reference_info_collection"
import { get } from "svelte/store"

describe("Primary heading behavior", () => {
	it("can put mutiple references", () => {
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

		referenceInfo.update(otherInfos => [ ...otherInfos, referenceA ])
		referenceInfo.update(otherInfos => [ ...otherInfos, referenceB ])

		expect(get(referenceInfo)).toStrictEqual([
			referenceA,
			referenceB
		])
		cleanup()
	})

	it("cannot put same references", () => {
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

		referenceInfo.update(otherInfos => [ ...otherInfos, referenceA ])
		referenceInfo.update(otherInfos => [ ...otherInfos, referenceB ])
		referenceInfo.update(otherInfos => [ ...otherInfos, referenceA ])

		expect(get(referenceInfo)).toStrictEqual([
			referenceA,
			referenceB
		])
		cleanup()
	})
})
