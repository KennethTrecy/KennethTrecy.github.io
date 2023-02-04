import { check } from "gramma"
import { test } from "@playwright/test"

import checkGrammar from "../utilities/check_grammar"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/")

	await checkGrammar(page)
})
