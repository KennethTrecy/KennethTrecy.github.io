import { describe, it, expect } from "vitest"

import type { PageMeta } from "@/types/head"

import { WEBSITE_OWNER } from "@/constants/names"
import { LICENSE } from "@/constants/miscellaneous_meta"

import definePageMeta from "./define_page_meta"

describe("Define page meta behavior", function() {
	it("can set defaults to optional properties", function() {
		const path = "/"
		const others: Partial<PageMeta> = {}

		const meta = definePageMeta(path, others)

		expect(meta.version).toStrictEqual("0.1")
		const currentDate = new Date()
		expect(meta.datePublished.getDate()).toStrictEqual(currentDate.getDate())
		expect(meta.datePublished.getMonth()).toStrictEqual(currentDate.getMonth())
		expect(meta.datePublished.getFullYear()).toStrictEqual(currentDate.getFullYear())
		expect(meta.dateModified.getDate()).toStrictEqual(currentDate.getDate())
		expect(meta.dateModified.getMonth()).toStrictEqual(currentDate.getMonth())
		expect(meta.dateModified.getFullYear()).toStrictEqual(currentDate.getFullYear())
		expect(meta.title).toStrictEqual("Draft Page")
		expect(meta.description).toStrictEqual("This is a draft page.")
		expect(meta.keywords).toStrictEqual([ "draft" ])
		expect(meta.author).toStrictEqual(WEBSITE_OWNER)
		expect(meta.encoder).toStrictEqual(WEBSITE_OWNER)
		expect(meta.designer).toStrictEqual([ WEBSITE_OWNER ])
		expect(meta.creator).toStrictEqual(WEBSITE_OWNER)
		expect(meta.license).toStrictEqual(LICENSE)
	})

	it("can default last modified date to published date", function() {
		const datePublished = new Date(2022, 0, 1)
		const instance = definePageMeta("", { datePublished })

		const data = instance.dateModified

		expect(data).toStrictEqual(datePublished)
	})

	it("can defaults to optional properties", function() {
		const path = "/"
		const others: Partial<PageMeta> = {
			"encoder": "A B"
		}

		const meta = definePageMeta(path, others)

		expect(meta.keywords).toStrictEqual([ "draft" ])
		expect(meta.author).toStrictEqual(WEBSITE_OWNER)
		expect(meta.encoder).toStrictEqual(others.encoder)
		expect(meta.designer).toStrictEqual([ others.encoder ])
		expect(meta.creator).toStrictEqual(others.encoder)
	})
})
