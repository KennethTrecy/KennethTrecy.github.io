import { test } from "@playwright/test"

import checkGrammar from "../../utilities/check_grammar.ts"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/articles/key_steps_to_add_gramma_for_improved_ci")

	await checkGrammar(
		page,
		matches => matches.filter(
			match => !(
				match.sentence.indexOf(".github/") > -1
				&& (
					match.word === " ."
					|| match.word === "github"
				)
			)
		)
	)
})
