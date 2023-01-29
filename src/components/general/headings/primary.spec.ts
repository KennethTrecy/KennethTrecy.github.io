// @vitest-environment jsdom

import { describe, it, expect } from "vitest"
import { render, cleanup } from "@testing-library/svelte"

import Component from "./primary.svelte"

describe("Primary header behavior", () => {
	it("can render prefix as separate", async () => {
		const prefix = "I. "
		const { container } = render(Component, { prefix })

		const property = container.querySelector("[itemprop~=headline][itemprop~=name]")

		expect(property).not.toBeNull()
		expect(property?.innerHTML).not.toContain(prefix)

		cleanup()
	})

	it("can render one span if there is no prefix", async () => {
		const { container } = render(Component)

		const spans = container.querySelectorAll("h1 > span")

		expect(spans).toHaveLength(1)

		cleanup()
	})
})
