import type { PageMeta } from "@/types/content_metadata"

import aboutMeta from "@/routes/about_myself/meta"
import indexMeta from "@/routes/meta"
import projectsMeta from "@/routes/projects/meta"
import websiteInfoMeta from "@/routes/website_info/meta"

const metaCollection = <PageMeta[]>[
	indexMeta,
	aboutMeta,
	projectsMeta,
	websiteInfoMeta
]

export default metaCollection
