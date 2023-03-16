import type { PageMeta } from "@/types/content_metadata"

import aboutMeta from "@/routes/about_myself/meta"
import articleMetaCollection from "@/constants/article_meta_collection"
import articlesMeta from "@/routes/articles/meta"
import indexMeta from "@/routes/meta"
import projectsMeta from "@/routes/projects/meta"
import publishingPrinciplesMeta from "@/routes/website_info/publishing_principles/meta"
import websiteInfoMeta from "@/routes/website_info/meta"

const metaCollection = <PageMeta[]>[
	indexMeta,
	aboutMeta,
	projectsMeta,
	articlesMeta,
	websiteInfoMeta,
	publishingPrinciplesMeta,
	...articleMetaCollection
]

export default metaCollection
