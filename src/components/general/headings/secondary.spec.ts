// @vitest-environment jsdom

import { describe, it, expect } from "vitest"
import { render, cleanup, fireEvent } from "@testing-library/svelte"

import Component from "./secondary.svelte"

describe("Secondary header behavior", () => {
	it("can render prefix as separate", async () => {
		const prefix = "I. "
		const id = "hello_a"
		const { container } = render(Component, { prefix, id })

		const property = container.querySelector("[itemprop~=headline][itemprop~=name]")

		expect(property).not.toBeNull()
		expect(property?.innerHTML).not.toContain(prefix)

		cleanup()
	})

	it("can render one span if there is no prefix", async () => {
		const id = "hello_b"
		const { container } = render(Component, { id })

		const spans = container.querySelectorAll("h2 > span")

		expect(spans).toHaveLength(1)

		cleanup()
	})

	it("can show bookmark if hovered", async () => {
		const id = "hello_c"
		const { container } = render(Component, { id })

		const header = container.querySelector("h2") as HTMLHeadingElement
		await fireEvent.mouseOver(header)

		const bookmark = container.querySelector(".visible")
		expect(bookmark).not.toBeNull()

		cleanup()
	})

	it("can hide bookmark if unhovered", async () => {
		const id = "hello_d"
		const { container } = render(Component, { id })

		const header = container.querySelector("h2") as HTMLHeadingElement
		await fireEvent.mouseOver(header)
		await fireEvent.mouseOut(header)

		const bookmark = container.querySelector(".invisible")
		expect(bookmark).not.toBeNull()

		cleanup()
	})
})
