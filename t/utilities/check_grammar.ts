import { check } from "gramma"
import { expect, Page } from "@playwright/test"

import dictionary from "~/data/dictionary"

export default async function(page: Page) {
	const selectors = [
		".menu a span.flex-1",
		"[itemprop~=text]",
		"h1",
		"h2"
	]
	const allSelectors = selectors.join(", ")
	const allTexts = await page.locator(`css=${allSelectors}`).allInnerTexts()

	const pendingResults: Promise<any>[] = allTexts.map(async text => {
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
