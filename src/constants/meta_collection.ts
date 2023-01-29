import type { PageMeta } from "@/types/head"

import indexMeta from "@/routes/meta"
import aboutMeta from "@/routes/about_myself/meta"
import projectsMeta from "@/routes/projects/meta"

const metaCollection: PageMeta[] = [
	indexMeta,
	aboutMeta,
	projectsMeta
]

export default metaCollection
