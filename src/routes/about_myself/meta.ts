import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
import definePageMeta from "@/components/general/define_page_meta"

const meta = definePageMeta("/about_myself", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2023, 1, 15, 2, 30)),
	// eslint-disable-next-line max-len
	"description": "Know more about Kenneth Trecy's journey and his skills on I.T. field. Contact details have been listed here too if you want to connect with him.",
	"keywords": [ "Kenneth Trecy", "contact", "journey", "skills", "Filipino programmer" ],
	"title": "Who am I?: Journey of Trecy",
	"version": "1.002-dev"
})

export default meta
