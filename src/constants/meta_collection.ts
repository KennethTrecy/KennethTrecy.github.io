import type { PageMeta } from "@/types/head"

import aboutMeta from "@/routes/about_myself/meta"
import articlesMeta from "@/routes/articles/meta"
import articleMetaCollection from "@/constants/article_meta_collection"
import indexMeta from "@/routes/meta"
import projectsMeta from "@/routes/projects/meta"

const metaCollection: PageMeta[] = [
	indexMeta,
	aboutMeta,
	projectsMeta,
	articlesMeta,
	...articleMetaCollection
]

export default metaCollection
