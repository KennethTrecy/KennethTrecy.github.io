import { dev } from "$app/environment"

/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (dev) {
				return html
			}

			const minimizeHTML = html.replace(/(\t|\r?\n)/g, "")
			return minimizeHTML
		}
	 })

	return response
}
