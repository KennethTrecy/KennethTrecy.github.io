<script lang="ts">
	import { onMount } from "svelte"

	import type { HeadingInfo } from "@/types/container_info"

	import pageMeta from "@/routes/articles/centering_a_child_element/meta"

	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ExampleCode from "@/components/general/containers/example_code.svelte"
	import ExampleOutput from "@/components/general/containers/example_output.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const introduction = defineHeadingInfo({ "text": "Introduction" })
	const classical = defineHeadingInfo({ "text": "The Classical Way" })
	const flexbox = defineHeadingInfo({ "text": "Using Flexible Box Layout" })
	const grid = defineHeadingInfo({ "text": "Using Grid Layout" })
	const unorthodox = defineHeadingInfo({ "text": "The Unorthodox Way" })
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="about">
			<Keyword>Centering</Keyword> an element is a usual task for a web developer. Images, modals, navigation anchor, and container of block of texts are the common components desired to be in the center. Semantically, Cascading Style Sheets (<abbr>CSS</abbr>) uses the word <em>center</em> to indicate that an element has equal spaces with respect to intended axis.
		</SimpleText>
		<SimpleText>
			A programmer may center a content according to its <Keyword>x-axis</Keyword> (e.g. <code>text-align: center;</code>), <Keyword>y-axis</Keyword> (e.g. <code>vertical-align: middle;</code>), or both. This article explores common ways to put an element in the center and presents a unorthodox way for a special use case.
		</SimpleText>
	</StructuredSection>
</ArticlePost>
