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
		"keywords"
	]
	const allMetaSelectors = metaSelectors.map(name => `meta[name=${name}]`)
	const allMetaTexts = allMetaSelectors.map(
		selector => page
			.locator(selector)
			.getAttribute("content")
			.then(
				content => selector.includes("keywords")
					? content.replace(/,/g, ", ")
					: content
			)
	)
	const allTexts = (await Promise.all([
		...allMetaTexts,
		...allAlternateTexts,
		page.locator(`css=${allInnerTextSelectors}`).allInnerTexts()
	])).flat()

	const pendingResults: Promise<any>[] = [...new Set(allTexts)].map(async text => {
		const result = await check(text, {
			"api_url": "http://localhost:8081/v2/check",
			dictionary
		})

		return result.matches
	})

	const expectedMatches = allTexts.map(() => [])
	const matches = await Promise.all(pendingResults)
	await expect(matches).toEqual(expectedMatches)
}
