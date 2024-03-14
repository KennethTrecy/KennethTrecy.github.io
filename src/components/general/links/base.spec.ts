// @vitest-environment jsdom

import { type AnchorLinkType } from "@/types/container_info"

import { cleanup, render } from "@testing-library/svelte"
import { describe, expect, it } from "vitest"

import Component from "./base.svelte"

describe("Base link behavior", () => {
	it("can have no scope", () => {
		const address = "https://example.com/own_scope"
		const relationship: AnchorLinkType[] = [ "external" ]
		const { container } = render(Component, {
			address,
			relationship
		})

		const property = container.querySelector("[itemtype]")

		expect(property).toBeNull()

		cleanup()
	})

	it("can have own scope", () => {
		const itemtype = "https://schema.org/CreativeWork"
		const address = "https://example.com/own_scope"
		const relationship: AnchorLinkType[] = [ "external" ]
		const { container } = render(Component, {
			itemtype,
			address,
			relationship
		})

		const property = container.querySelector("[itemtype]")

		expect(property).not.toBeNull()
		expect(property?.getAttribute("rel")).toContain("external")

		cleanup()
	})
})
