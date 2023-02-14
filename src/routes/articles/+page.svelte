<script lang="ts">
	import pageMeta from "@/routes/articles/meta"

	import articleMetaCollection from "@/constants/article_meta_collection"

	import defineHeadingInfo from "@/components/general/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"

	const articlesWritten = defineHeadingInfo({
		"prefix": "✏️",
		"text": "Articles Written"
	})
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={articlesWritten.id}>
		<SecondaryHeading headingInfo={articlesWritten}/>
		<SimpleText itemprop="mainEntity">
			For some time, Kenneth Trecy may write articles and posts that may be useful for beginners and fellow developers. People are free to reference or link the articles below if they deemed informational or related to the topic they are in.
		</SimpleText>
	</StructuredSection>
</ArticlePost>
