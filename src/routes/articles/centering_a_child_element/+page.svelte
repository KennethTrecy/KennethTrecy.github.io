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

		</SimpleText>
	</StructuredSection>
</ArticlePost>
