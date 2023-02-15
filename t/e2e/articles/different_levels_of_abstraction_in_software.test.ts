import { test } from "@playwright/test"

import checkGrammar from "../utilities/check_grammar.ts"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/articles/different_levels_of_abstraction_in_software")

	await checkGrammar(page)
})
