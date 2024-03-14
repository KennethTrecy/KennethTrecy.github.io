/* eslint-disable max-lines-per-function */
// @vitest-environment jsdom

import { type ReferenceInfo } from "@/types/reference"

import { cleanup, render } from "@testing-library/svelte"
import { describe, expect, it } from "vitest"

import Component from "./link.svelte"

describe("Reference link behavior", () => {
	const rawSpaceDetector = /(?<rawSpace>\n|\t)+/gu

	it("can put no reference", () => {
		const info: ReferenceInfo = {
			"title": "Reference A",
			"link": "https://example.com/reference_a",
			"linkCategory": "outbound",
			"itemtype": "https://schema.org/CreativeWork",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			}
		}
		const { container } = render(Component, { info })

		const citation = container.querySelector("cite")

		expect(citation).not.toBeNull()
		expect(citation?.textContent?.replaceAll(rawSpaceDetector, " "))
			.not.toContain("is licensed under License A")

		cleanup()
	})

	it("can put one reference", () => {
		const info: ReferenceInfo = {
			"title": "Reference A",
			"link": "https://example.com/reference_a",
			"linkCategory": "outbound",
			"itemtype": "https://schema.org/CreativeWork",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			},
			"license": {
				"name": "License A",
				"link": "https://example.com/license_example"
			}
		}
		const { container } = render(Component, { info })

		const citation = container.querySelector("cite")

		expect(citation).not.toBeNull()
		expect(citation?.textContent?.replaceAll(rawSpaceDetector, " "))
			.toContain("is licensed under License A")

		cleanup()
	})

	it("can put two references", () => {
		const info: ReferenceInfo = {
			"title": "Reference A",
			"link": "https://example.com/reference_a",
			"linkCategory": "outbound",
			"itemtype": "https://schema.org/CreativeWork",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			},
			"license": [
				{
					"name": "License A",
					"link": "https://example.com/license_a_example"
				}, {
					"name": "License B",
					"link": "https://example.com/license_b_example"
				}
			]
		}
		const { container } = render(Component, { info })

		const citation = container.querySelector("cite")

		expect(citation).not.toBeNull()
		const citationText = citation?.textContent?.replaceAll(rawSpaceDetector, " ")
		expect(citationText).toContain("License A")
		expect(citationText).toContain("and License B")

		cleanup()
	})

	it("can put multiple references", () => {
		const info: ReferenceInfo = {
			"title": "Reference A",
			"link": "https://example.com/reference_a",
			"linkCategory": "outbound",
			"itemtype": "https://schema.org/CreativeWork",
			"author": {
				"groupName": "A",
				"link": "https://example.com/a"
			},
			"license": [
				{
					"name": "License A",
					"link": "https://example.com/license_a_example"
				}, {
					"name": "License B",
					"link": "https://example.com/license_b_example"
				}, {
					"name": "License C",
					"link": "https://example.com/license_c_example"
				}
			]
		}
		const { container } = render(Component, { info })

		const citation = container.querySelector("cite")

		expect(citation).not.toBeNull()
		const citationText = citation?.textContent?.replaceAll(rawSpaceDetector, " ")

		expect(citationText).toContain("License A,")
		expect(citationText).toContain("License B,")
		expect(citationText).toContain("and License C")

		cleanup()
	})
})
