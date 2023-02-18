<script lang="ts">
	import { onMount } from "svelte"

	import type { HeadingInfo } from "@/types/container_info"

	import pageMeta from "@/routes/articles/centering_a_child_element/meta"

	import Bookmark from "@/components/general/links/bookmark.svelte"
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
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="about">
			Centering an element is a usual task for a web developer. Images, modals, navigation anchor, and container of block of texts are the common components desired to be in the center. Semantically, Cascading Style Sheets (<abbr>CSS</abbr>) uses the word <em itemprop="keyword">center<em> to indicate that an element has equal spaces with respect to intended axis. It may center a content according to its x-axis (e.g. <code>text-align: center;</code>), y-axis (e.g. <code>vertical-align: middle;</code>), or both. This article explores common ways to put an element in the center and presents a unorthodox way for a special use case.
		</SimpleText>
	</StructuredSection>
</ArticlePost>
