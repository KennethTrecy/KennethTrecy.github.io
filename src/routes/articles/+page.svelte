<script lang="ts">
	import pageMeta from "@/routes/articles/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle>
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<div
			itemprop="mainEntity"
			itemscope
			itemtype=""
			class="">
			<section class="">

			</section>
		</div>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
