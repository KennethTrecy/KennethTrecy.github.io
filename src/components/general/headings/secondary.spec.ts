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
		const spans = container.querySelectorAll("h2 span")

		expect(property).not.toBeNull()
		expect(property?.innerHTML).not.toContain(prefix)
		expect(spans).toHaveLength(3)

		cleanup()
	})

	it("can render two spans if there is no prefix", async () => {
		const id = "hello_b"
		const { container } = render(Component, { id })

		const spans = container.querySelectorAll("h2 span")

		expect(spans).toHaveLength(2)

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

	it("can render as raw", async () => {
		const id = "hello_e"
		const mustBeRaw = true
		const { container } = render(Component, { id, mustBeRaw })

		const property = container.querySelector("[itemprop~=headline][itemprop~=name]")
		const spans = container.querySelectorAll("h2 span")

		expect(property).toBeNull()
		expect(spans).toHaveLength(2)

		cleanup()
	})
})
