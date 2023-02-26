import { test } from "@playwright/test"

import checkGrammar from "../../utilities/check_grammar.ts"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/articles/centering_a_child_element")

	await checkGrammar(page)
})
