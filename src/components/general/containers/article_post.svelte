<script lang="ts">
	import type { PageMeta } from "@/types/head"

	import CommonHead from "@/components/general/common_head.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"

	export let pageMeta: PageMeta
	export let itemtype: string = "https://schema.org/Article"
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
