<script lang="ts">
	import pageMeta from "@/routes/articles/meta"

	import articleMetaCollection from "@/constants/article_meta_collection"

	import CommonHead from "@/components/general/common_head.svelte"
	import ArticleCard from "@/components/general/card/article.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const articlesWritten = defineHeadingInfo({
		"prefix": "✏️",
		"text": "Articles Written"
	})
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle>
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection
			id={articlesWritten.id}
			itemprop="mainEntity"
			itemtype="https://schema.org/ItemList">
			<SecondaryHeading headingInfo={articlesWritten} variant="name"/>
			<p itemprop="description">
				For some time, Kenneth Trecy may write articles and posts that may be useful for beginners and fellow developers. People are free to reference or link the articles below if they deemed informational or related to the topic they are in.
			</p>
			<StructuredList order="descending" variant="card" hasOwnScope={false}>
				{#each articleMetaCollection as articleMeta}
					<StructuredListItem variant="card">
						<ArticleCard {articleMeta}/>
					</StructuredListItem>
				{/each}
			</StructuredList>
		</StructuredSection>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
