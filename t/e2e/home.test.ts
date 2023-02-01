import { check } from "gramma"
import { expect, test } from "@playwright/test"

import dictionary from "../data/dictionary.json"

test("paragraphs have correct grammar", async ({ page }) => {
	await page.goto("/")

	const allTexts = await page.locator("css=p[itemprop], h1, h2, a span.flex-1").allInnerTexts()

	const pendingResults: Promise<any>[] = allTexts.map(async text => {
		const result = await check(text, {
			"api_url": "http://localhost:8081/v2/check",
			dictionary,
		})

		return result.matches
	})

	const matches = await Promise.all(pendingResults)
	await expect(matches).toEqual(allTexts.map(() => []))
})
