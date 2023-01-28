import { CF_PAGES_URL } from "$env/static/private"

import type { PageMeta }from "@/types/head"

import indexMeta from "@/routes/meta"
import aboutMeta from "@/routes/about/meta"
import projectsMeta from "@/routes/projects/meta"

export async function GET() {
	const metas = [
		indexMeta,
		aboutMeta,
		projectsMeta
	]

	interface URLInfo {
		path: string,
		lastModified: Date
	}

	const documentURLInfos: URLInfo[] = metas.map((meta: PageMeta) => {
		return {
			"lastModified": meta.dateModified,
			"path": meta.path
		}
	})
	const documentURLTags = documentURLInfos.map(info => `
		<url>
			<loc>${CF_PAGES_URL}${info.path}</loc>
			<lastmod>${info.lastModified.toJSON()}</lastmod>
		</url>
	`)
	const compiledURLTags = documentURLTags.join("\n")

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${compiledURLTags}
		</urlset>`.trim()
		.replace(/(\n|\t)/g, " ")
		.replace(/  +/g, " ")
		.replace(/> </g, "><"),
		{
			headers: {
				"Content-Type": "application/xml"
			}
		}
	);
}
