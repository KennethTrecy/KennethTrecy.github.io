import { check } from "gramma"
import { expect, Page } from "@playwright/test"

import dictionary from "../data/dictionary.ts"

export default async function(
	page: Page,
	matchesModifier: (matchData: unknown[]) => unknown[] = matches => matches
) {
	const innerTextSelectors = [
		"title",
		".menu a span.flex-1",
		"[itemprop~=text]",
		"p[itemprop~=description]",
		"h1",
		"h2",
		"h3",
		"h4",

		// Page-specific selectors

		// Selectors that will match on `/about_myself`.
		"#journey p",
		"#skills p",
		"#contacts p",
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
					content => {
						const areKeywords = selector.includes("keywords")

						if (areKeywords) {
							const spacedKeywords = content.replace(/,/g, ", ")
							return spacedKeywords.slice(0, 1).toLocaleUpperCase() + spacedKeywords.slice(1)
						}

						return content
					}
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

	await page.waitForTimeout(2000)

	const BASE_DELAY = 3500
	const pendingResults: Promise<any>[] = uniqueTexts.map(async text => {
		// Subtract it by half to allow reducing the final delay
		const delayMultiplier = Math.random() - 0.5
		// Base delay has been multiplied by 2 to simulate that it is like 100% when multiplied with
		// delay multiplier
		const finalDelay = (BASE_DELAY + (BASE_DELAY * 2 / delayMultiplier)) % 1
		await new Promise(resolve => {
			setTimeout(resolve, finalDelay)
		})
		const result = await check(text, {
			"api_url": "http://0.0.0.0:8081/v2/check",
			dictionary
		})

		return result.matches
	})

	const expectedMatches = uniqueTexts.map(() => [])
	const matches = await Promise.all(pendingResults)
	const filteredMatches = matches.map(matchesModifier)
	expect(filteredMatches).toEqual(expectedMatches)
}
