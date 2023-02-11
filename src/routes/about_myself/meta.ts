import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
import definePageMeta from "@/components/general/define_page_meta"

const meta = definePageMeta("/about_myself", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2023, 1, 12)),
	"description": "Know more about Kenneth Trecy's journey and his skills on I.T. field. Contact details have been listed here too if you want to connect with him.",
	"keywords": [ "Kenneth Trecy", "contact" , "journey" ],
	"title": "Who am I?",
	"version": "1.1-dev"
})

export default meta
