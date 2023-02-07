import type { PageMeta } from "@/types/head"

import aboutMeta from "@/routes/about_myself/meta"
import articlesMeta from "@/routes/articles/meta"
import indexMeta from "@/routes/meta"
import projectsMeta from "@/routes/projects/meta"

const metaCollection: PageMeta[] = [
	indexMeta,
	aboutMeta,
	projectsMeta,
	articlesMeta
]

export default metaCollection
