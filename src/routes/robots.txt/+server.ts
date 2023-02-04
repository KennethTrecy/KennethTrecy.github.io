import { CF_PAGES_URL } from "$env/static/private"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

import metaCollection from "@/constants/meta_collection"

export async function GET() {
	const documentPaths = CF_PAGES_URL === PUBLIC_PRODUCTION_BASE_URL
		? metaCollection.map(meta => meta.path)
		: []

	const allowRules = documentPaths.map(path => `Allow: ${path}$`)
	const compiledAllowRules = allowRules.join("\n")

	const sitemapRules = [ `Sitemap: ${CF_PAGES_URL}/sitemap.xml` ]
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
