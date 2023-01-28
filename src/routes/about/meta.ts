import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
import PageMeta from "@/components/general/page_meta"

const meta = new PageMeta(import.meta.url, {
	"version": "0.1",
	"datePublished": FIRST_PUBLICATION_DATE
})

export default meta
