import type { PageMeta } from "@/types/content"

import aboutMeta from "@/routes/about_myself/meta"
import indexMeta from "@/routes/meta"
import projectsMeta from "@/routes/projects/meta"

const metaCollection = <PageMeta[]>[
	indexMeta,
	aboutMeta,
	projectsMeta
]

export default metaCollection
