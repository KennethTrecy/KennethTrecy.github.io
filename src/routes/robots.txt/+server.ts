import { CF_PAGES_URL } from "$env/static/private"

import indexMeta from "@/routes/meta"
import aboutMeta from "@/routes/about/meta"
import projectsMeta from "@/routes/projects/meta"

export async function GET() {
	const metas = [
		indexMeta,
		aboutMeta,
		projectsMeta
	]

	const documentPaths = metas.map(meta => meta.path)

	const allowRules = documentPaths.map(path => `Allow: ${path}$`)
	const compiledAllowRules = allowRules.join("\n")

	const sitemapRules = [ `Sitemap: ${CF_PAGES_URL}/sitemap.xml` ]
	const compiledSitemapRules = sitemapRules.join("\n")

	return new Response(
		`
		User-agent: *
		${compiledAllowRules}
		Disallow: /

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
