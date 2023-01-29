<script lang="ts">
	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle>
	<Heading slot="title">{pageMeta.title}</Heading>
	<svelte:fragment slot="content">
		<section itemprop="about" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">Introduction</h2>
			<p itemprop="about">
				Abstraction is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. They take in different levels which this page is all about.
			</p>
			<p>
				Thre are several levels of abstraction listed below. They are ordered from almost specific to most general kind of abstraction.
			</p>
			<ol itemprop="mainEntity">
				<li>Program-level</li>
				<li>Configuration-level</li>
				<li>Variable-level</li>
				<li>Function-level</li>
				<li>Class-level</li>
				<li>Generic-level</li>
			<ol>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</MainArticle>
