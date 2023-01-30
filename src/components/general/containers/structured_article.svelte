<script lang="ts">
	export let itemtype: string = "https://schema.org/WebContent"
</script>

<div class="flex-1 m-0 p-0 h-full w-full flex flex-col justify-center items-stretch container">
	<article
		itemprop="mainContentOfPage"
		itemscope
		itemtype="https://schema.org/WebPageElement"
		class="container flex-1 flex flex-col justify-center items-center">
		<slot name="title"></slot>
		<div class="flex flex-col md:flex-row-reverse justify-center items-stretch">
			{#if $$slots.aside}
				<aside class="prose md:prose-lg w-96 flex flex-row justify-left items-start">
					<slot name="aside"></slot>
				</aside>
			{/if}
			<div
				itemprop="mainEntity"
				itemscope
				{itemtype}
				class="prose md:prose-lg pb-8 text-justify">
				<slot name="content"></slot>
			</div>
		</div>
		<footer class="prose md:prose-lg pb-8">
			<slot name="metadata"></slot>
		</footer>
	</article>
</div>
