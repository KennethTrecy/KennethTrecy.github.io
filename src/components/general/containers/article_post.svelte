<script lang="ts">
	import type { ArticlePageMeta } from "@/types/head"

	import CommonHead from "@/components/general/common_head.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"

	export let pageMeta: ArticlePageMeta
	$: articleType = pageMeta.articleType
	$: itemtype = articleType === "technical article"
		? "https://schema.org/TechArticle"
		: articleType === "blog post"
			? "https://schema.org/BlogPosting"
			: "https://schema.org/Article"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle {itemtype}>
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<slot></slot>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
