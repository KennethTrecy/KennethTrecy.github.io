import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
import { profile } from "@/constants/drive_images"

import definePageMeta from "@/components/general/define_page_meta"

const meta = definePageMeta("/", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2023, 1, 15, 3, 10)),
	// eslint-disable-next-line max-len
	"description": "Do you need help in back-end web development? Hi! I am Kenneth Trecy, a programmer living in the Philippines. Get to know me by visiting out my personal website!",
	"keywords": [
		"Kenneth Trecy",
		"portfolio",
		"programmer in the Philippines",
		"personal website",
		"back-end programmer"
	],
	"title": "Kenneth Trecy's Portfolio",
	"version": "1.002",
	"image": profile
})

export default meta
