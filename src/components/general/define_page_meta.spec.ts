/* eslint-disable max-lines-per-function */
import { describe, expect, it } from "vitest"

import type { PageMeta } from "@/types/content_metadata"

import Logo from "@/multimedia/logo.png"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"
import { LICENSE, LICENSE_URL } from "@/constants/miscellaneous_meta"
import {
	WEBSITE_OWNER_FAMILY_NAME,
	WEBSITE_OWNER_GIVEN_NAME,
	WEBSITE_OWNER_LINK
} from "@/constants/names"

import definePageMeta from "./define_page_meta"

describe("Define page meta behavior", () => {
	it("can set defaults to optional properties", () => {
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
		const websiteOwner = {
			"givenName": WEBSITE_OWNER_GIVEN_NAME,
			"familyName": WEBSITE_OWNER_FAMILY_NAME,
			"link": WEBSITE_OWNER_LINK
		}
		expect(meta.authors).toStrictEqual([ websiteOwner ])
		expect(meta.encoder).toStrictEqual(websiteOwner)
		expect(meta.designers).toStrictEqual([ websiteOwner ])
		expect(meta.creator).toStrictEqual(websiteOwner)
		expect(meta.license).toStrictEqual({
			"name": LICENSE,
			"link": LICENSE_URL
		})
		expect(meta.pageURL).toStrictEqual(`${PUBLIC_PRODUCTION_BASE_URL}${path}`)
		expect(meta.image.defaultLink).toStrictEqual(`${PUBLIC_PRODUCTION_BASE_URL}${Logo}`)
		expect(meta.image.description).toStrictEqual("Logo of Kenneth Trecy Tobias")
		expect(meta.objectType).toStrictEqual("website")
	})

	it("can default last modified date to published date", () => {
		const datePublished = new Date(2022, 0, 1)
		const instance = definePageMeta("", { datePublished })

		const data = instance.dateModified

		expect(data).toStrictEqual(datePublished)
	})

	it("can defaults to optional properties", () => {
		const path = "/"
		const others: Partial<PageMeta> = {
			"encoder": {
				"givenName": "A",
				"familyName": "B",
				"link": "https//example.com"
			}
		}

		const meta = definePageMeta(path, others)

		expect(meta.keywords).toStrictEqual([ "draft" ])
		const websiteOwner = {
			"givenName": WEBSITE_OWNER_GIVEN_NAME,
			"familyName": WEBSITE_OWNER_FAMILY_NAME,
			"link": WEBSITE_OWNER_LINK
		}
		expect(meta.authors).toStrictEqual([ websiteOwner ])
		expect(meta.encoder).toStrictEqual(others.encoder)
		expect(meta.designers).toStrictEqual([ others.encoder ])
		expect(meta.creator).toStrictEqual(others.encoder)
	})
})
