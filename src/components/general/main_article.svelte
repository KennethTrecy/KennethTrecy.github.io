<script lang="ts">
	export let itemtype: string = "https://schema.org/WebPageContent"
</script>

<div
	itemprop="mainContentOfPage"
	itemscope
	itemtype="https://schema.org/WebPageElement"
	class="h-full w-full flex flex-col justify-center items-center">
	<article
		itemprop="mainEntity"
		itemscope
		{itemtype}
		class="pb-8">
		<slot></slot>
	</article>
</div>
