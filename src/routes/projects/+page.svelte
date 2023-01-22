<script lang="ts">
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
</script>

<svelte:head>
	<CommonHead
		title="Projects | KennethTrecy"
		description="List of personal open-source projects made by Kenneth Trecy"
		keywords={[ "Kenneth Trecy", "personal", "projects" ]}
		pageVersion="0.1"/>
</svelte:head>

<MainArticle itemtype="https://schema.org/CreativeWorkSeries">
	<h1 slot="title">List of Personal Projects</h1>
	<svelte:fragment slot="content">
		<section
			itemprop="about"
			itemscope
			itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">
				Rationale
			</h2>
			<p itemprop="mainEntity">
				Over the years, I have built multiple projects to apply my knowledge. As a consequence, I gain experience to build them, to solve their technical issues, and to improve their technical design if possible. Building them helps me improve my decision-making in future projects and not to take things for granted that look like basic. Indeed, simplicity is hard.
			</p>
		</section>
		<section
			itemprop="hasPart"
			itemscope
			itemtype="https://schema.org/WebContent"
			class="flex flex-col justify-center items-center">

		</section>
		<section
			itemprop="hasPart"
			itemscope
			itemtype="https://schema.org/WebContent"
			class="flex flex-col justify-center items-center">

		</section>
	</svelte:fragment>
</MainArticle>
