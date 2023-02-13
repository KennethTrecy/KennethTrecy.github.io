import { check } from "gramma"
import { expect, Page } from "@playwright/test"

import dictionary from "../data/dictionary.ts"

export default async function(page: Page) {
	const innerTextSelectors = [
		"title",
		".menu a span.flex-1",
		"[itemprop~=text]",
		"h1",
		"h2"
	]
	const allInnerTextSelectors = innerTextSelectors.join(", ")
	const allAlternateTexts = (await page.locator(`css=[alt]`).all()).map(
		locator => locator.getAttribute("alt")
	)
	const metaSelectors = [
		"description",
		"keywords",
		"og:title",
		"og:description",
		"og:image:alt"
	]
	const allMetaSelectors = metaSelectors.map(name => `meta[name="${name}"]`)
	const allMetaTexts = (await Promise.all(allMetaSelectors.map(
		selector => page.locator(selector).all().then(
			locators => locators.map(
				locator => locator.getAttribute("content")
				.then(
					content => selector.includes("keywords")
						? content.replace(/,/g, ", ")
						: content
				)
			)
		)
	))).flat()
	const allTexts = (await Promise.all([
		...allMetaTexts,
		...allAlternateTexts,
		page.locator(`css=${allInnerTextSelectors}`).allInnerTexts()
	])).flat()

	const uniqueTexts = [ ...new Set(allTexts) ]
	const pendingResults: Promise<any>[] = uniqueTexts.map(async text => {
		const result = await check(text, {
			"api_url": "http://localhost:8081/v2/check",
			dictionary
		})

		return result.matches
	})

	const expectedMatches = uniqueTexts.map(() => [])
	const matches = await Promise.all(pendingResults)
	await expect(matches).toEqual(expectedMatches)
}
