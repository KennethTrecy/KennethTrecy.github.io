import { IS_INDEXABLE } from "$env/static/private"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

import metaCollection from "@/constants/meta_collection"

export async function GET() {
	const documentPaths = IS_INDEXABLE === "true"
		? metaCollection.map(meta => meta.path)
		: []

	const allowRules = documentPaths.map(path => `Allow: ${path}$`)
	const compiledAllowRules = allowRules.join("\n")

	const sitemapRules = [ `Sitemap: ${PUBLIC_PRODUCTION_BASE_URL}/sitemap.xml` ]
	const compiledSitemapRules = sitemapRules.join("\n")

	const userAgentRules = [
		"User-agent: *",
		compiledAllowRules,
		"Disallow: /"
	]
	const compiledUserAgentRules = userAgentRules.filter(Boolean).join("\n")

	return new Response(
		`
		${compiledUserAgentRules}

		${compiledSitemapRules}
		`.trim()
		.replace(/\t+/g, ""),
		{
			headers: {
				"Content-Type": "text/plain"
			}
		}
	);
}
