import articleMetaCollection from "@/constants/article_meta_collection"

import definePageMeta from "@/components/general/define_page_meta"

const publishedDateTimes = articleMetaCollection.map(meta => meta.datePublished.getTime())
const meta = definePageMeta("/articles", {
	"datePublished": new Date(Math.min(...publishedDateTimes)),
	"dateModified": new Date(Math.max(...publishedDateTimes)),
	"description": "Collection of articles written by Kenneth Trecy",
	"keywords": [ "Kenneth Trecy", "articles", "collection" ],
	"title": "Kenneth Trecy's Article Collection",
	"version": "0.1"
})

export default meta
