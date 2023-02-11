import { dev } from "$app/environment"

/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (dev) {
				return html
			}

			const minimizeHTML = html.replace(/(\t|\r?\n)/g, "")
			const spacedHTML = minimizeHTML
				// There are two cases that handled by the regex below:
				// - Sentences after period start with uppercase letter or number
				// - An acronym inside a sentence followed by a lowercase letter
				.replace(/>\.([A-Za-z0-9])/g, ">. $1")
				// Ensure there is a space between commas.
				.replace(/,([^ ])/g, ", $1")
			return spacedHTML
		}
	 })

	return response
}
