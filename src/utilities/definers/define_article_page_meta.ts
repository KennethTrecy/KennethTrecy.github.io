import { type ArticlePageMeta } from "@/types/content_metadata"

import definePageMeta from "@/utilities/definers/define_page_meta"

export default function(path: string, {
	title = "Draft Article Page",
	description = "This is a draft article page.",
	objectType = "article",
	articleType = "article",
	...otherProperties
}: Partial<Exclude<ArticlePageMeta, "path">> = {}): ArticlePageMeta {
	return {
		...definePageMeta(path, {
			title,
			description,
			objectType,
			...otherProperties
		}),
		articleType
	}
}
