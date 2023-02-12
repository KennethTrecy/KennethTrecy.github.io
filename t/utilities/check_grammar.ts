import { check } from "gramma"
import { expect, Page } from "@playwright/test"

import dictionary from "../data/dictionary.ts"

function checkEachGrammar(texts: string[]): Promise<any>[] {
	return texts.filter(text => text !== "").map(async text => {
		const result = await check(text, {
			"api_url": "http://localhost:8081/v2/check",
			dictionary
		})

		return result.matches
	})
}

export default async function(page: Page) {
	const metaSelectors = [
		"description",
		"keywords"
	]
	const allMetaSelectors = metaSelectors.map(name => `meta[name=${name}]`)
	const allMetaTextGroups = allMetaSelectors.map(
		selector => ({
			selector,
			"locator": page.locator(selector).all()
		})
	)

	const innerTextSelectors = [
		"title",
		".menu a span.flex-1",
		"[itemprop~=text]",
		"h1",
		"h2"
	]
	const allInnerTextSelectors = innerTextSelectors.join(", ")
	const allInnerTexts = page.locator(`css=${allInnerTextSelectors}`).allInnerTexts()

	const allAlternateElements = page.locator(`css=[alt]`).all()

	const allPendingResults: Promise<any>[] = []

	const allPendingMetaElements = (await Promise.all(allMetaTextGroups)).flat().map(({
		selector,
		locator
	}) => locator.then(elements => ({ selector, elements })))

	await allInnerTexts.then(texts => {
		allPendingResults.push(...checkEachGrammar(texts))
	})
	const allPendingRawMetaTexts = await Promise.all(allPendingMetaElements.map(pendingElement => {
		return pendingElement.then(elementInfo => {
			return elementInfo.elements.map(
				element => element.getAttribute("content").then(
					content => elementInfo.selector.includes("keywords")
						? content.replace(/,/g, ", ")
						: content
				)
			)
		})
	}))
	const allPendingAlternateTexts = await allAlternateElements.then(
		elements => elements.map(
			element => element.getAttribute("alt")
		)
	)
	const allPendingMetaTexts = await Promise.all(allPendingRawMetaTexts.flat())
	allPendingResults.push(...checkEachGrammar(allPendingMetaTexts))
	await Promise.all(allPendingAlternateTexts.flat()).then(texts => {
		allPendingResults.push(...checkEachGrammar(texts))
	})

	const expectedMatches = allPendingResults.map(() => [])
	const matches = await Promise.all(allPendingResults)
	await expect(matches).toEqual(expectedMatches)
}
