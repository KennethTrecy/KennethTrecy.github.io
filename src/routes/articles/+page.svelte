<script lang="ts">
	import pageMeta from "@/routes/articles/meta"

	import articleMetaCollection from "@/constants/article_meta_collection"

	import ArticleCard from "@/components/general/card/article.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

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
		<StructuredList
			order="descending"
			isProjectList={false}
			class={[ "list-none", "flex", "flex-col", "flex-wrap", "p-0" ]}>
			{#each articleMetaCollection as articleMeta}
				<StructuredListItem isInProjectList={false} class={[ "p-0" ]}>
					<ArticleCard {articleMeta}/>
				</StructuredListItem>
			{/each}
		</StructuredList>
	</StructuredSection>
</ArticlePost>
