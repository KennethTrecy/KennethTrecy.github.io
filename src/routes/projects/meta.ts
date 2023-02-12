import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"

import definePageMeta from "@/components/general/define_page_meta"

const meta = definePageMeta("/projects", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2023, 1, 12)),
	// eslint-disable-next-line max-len
	"description": "Kenneth Trecy has a decade of experience in programming websites. Here is an overview of different projects he was involved.",
	"keywords": [ "Kenneth Trecy", "involved", "personal", "projects" ],
	"title": "List of Involved Projects",
	"version": "1.001-dev"
})

export default meta
