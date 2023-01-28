<script lang="ts">
	import pageMeta from "@/routes/articles/meta"

	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle>
	<Heading slot="title" class="text-center md:text-left">{pageMeta.title}</Heading>
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
</MainArticle>
