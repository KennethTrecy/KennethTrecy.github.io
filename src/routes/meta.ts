import { profile } from "@/constants/drive_images"
import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"

import definePageMeta from "@/components/general/define_page_meta"
import makeSharedMultimediaLink from "@/components/general/make_shared_multimedia_link"


const meta = definePageMeta("/", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2022, 1, 12)),
	"description": "Do you need help in back-end web development? Hi! I am Kenneth Trecy, a programmer living in the Philippines. Get to know me by visiting out my personal website!",
	"keywords": [ "Kenneth Trecy", "portfolio", "Philippines" ],
	"title": "KennethTrecy's Portfolio",
	"version": "1.001-dev",
	"imageURL": makeSharedMultimediaLink(profile),
	"imageDescription": "Kenneth Trecy's face"
})

export default meta
