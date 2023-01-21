<script lang="ts">
	export let itemtype: string = "https://schema.org/WebPageContent"
</script>

<div class="h-full w-full flex flex-col justify-center items-center container">
	<article
		itemprop="mainContentOfPage"
		itemscope
		itemtype="https://schema.org/WebPageElement"
		class="prose md:prose-lg flex flex-col justify-center items-center">
		<slot name="title"></slot>
		<div
			itemprop="mainEntity"
			itemscope
			{itemtype}
			class="pb-8 text-justify">
			<slot name="content"></slot>
		</div>
		<article class="pb-8">
			<slot name="metadata"></slot>
		</article>
	</article>
</div>
