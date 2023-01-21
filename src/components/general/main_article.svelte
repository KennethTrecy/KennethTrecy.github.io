<script lang="ts">
	export let itemtype: string = "https://schema.org/WebPageContent"
</script>

<article
	itemprop="mainContentOfPage"
	itemscope
	itemtype="https://schema.org/WebPageElement"
	class="h-full w-full flex flex-col justify-center items-center">
	<slot name="title"></slot>
	<article
		itemprop="mainEntity"
		itemscope
		{itemtype}
		class="pb-8">
		<slot name="content"></slot>
	</article>
	<slot name="metadata"></slot>
</article>
