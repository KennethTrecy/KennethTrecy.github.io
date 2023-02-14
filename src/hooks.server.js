import { dev } from "$app/environment"

/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		"transformPageChunk": ({ html }) => {
			if (dev) {
				return html
			}

			const minimizeHTML = html.replace(/(?<extraSpaces>\t|\r?\n)/gu, "")
			const spacedHTML = minimizeHTML
				/*
				 * There are two cases that handled by the regex below:
				 * - Sentences after period start with uppercase letter or number
				 * - An acronym inside a sentence followed by a lowercase letter
				 */
				.replace(/>\.(?<textAfterElement>[A-Za-z0-9])/gu, ">. $1")
				// Handles the case of opening tags inside a sentence.
				.replace(/(?<textBeforeElement>[a-zA-Z0-9]{2,})<(?<elementName>[a-z]+)/gu, "$1 <$2")
				// Ensure there is a space between commas.
				.replace(/,(?<openingTag><\w+)/gu, ", $1")
				.replace(/<\/span><span/gu, "</span> <span")
			return spacedHTML
		}
	})

	return response
}
