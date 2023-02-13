import { IS_INDEXABLE } from "$env/static/private"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

import metaCollection from "@/constants/meta_collection"

export async function GET() {
	const robotsPath = "/robots.txt"
	const sitemapPath = "/sitemap.xml"
	const documentPaths = IS_INDEXABLE === "true"
		? metaCollection.map(meta => meta.path)
		: []

	const allowRules = [ robotsPath, sitemapPath, ...documentPaths ].map(path => `Allow: ${path}$`)
	const compiledAllowRules = allowRules.join("\n")

	const sitemapRules = [ `Sitemap: ${PUBLIC_PRODUCTION_BASE_URL}${sitemapPath}` ]
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
