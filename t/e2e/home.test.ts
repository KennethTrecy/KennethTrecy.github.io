import { check } from "gramma"
import { expect, test } from "@playwright/test"

test("paragraphs have correct grammar", async ({ page }) => {
	await page.goto("/")

	const allTexts = await page.locator("css=p").allInnerTexts()
	const results = await check(allTexts[0], {
		"api_url": "http://localhost:8081/v2/check",
		"dictionary": [ "KennethTrecy" ],
	})

	await expect(results).not.toBeNull()
})
