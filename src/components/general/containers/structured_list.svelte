<script lang="ts">
	import type { Order, ListVariant } from "@/types/container_info"

	export let order: Order

	export let hasOwnScope = true
	export let itemprop: string = "mainEntity"
	export const itemtype: string = "https://schema.org/ItemList"
	export let variant: ListVariant = "normal"
	let otherClasses: string[] = []
	const cardVariantClasses = [ "flex", "flex-col", "list-outside", "list-none" ]

	$: initialClasses = variant === "project"
		? [ "project_list", "flex-wrap", ...cardVariantClasses ]
		: variant === "card"
			? [ "card_list", ...cardVariantClasses, ]
			: []
	export { otherClasses as class }

	$: joinedClasses = [ ...initialClasses, ...otherClasses].join(" ")
	$: listOrder = order === "unordered"
		? "https://schema.org/ItemListUnordered"
		: order === "ascending"
			? "https://schema.org/ItemListOrderAscending"
			: "https://schema.org/ItemListOrderDescending"
</script>

{#if order === "unordered"}
	{#if hasOwnScope}
		<ul
			{itemprop}
			itemscope
			{itemtype}
			class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			<slot></slot>
		</ul>
	{:else}
		<ul class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			<slot></slot>
		</ul>
	{/if}
{:else}
	{#if hasOwnScope}
		<ol
			{itemprop}
			itemscope
			{itemtype}
			class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			<slot></slot>
		</ol>
	{:else}
		<ol class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			<slot></slot>
		</ol>
	{/if}
{/if}

<style lang="postcss">
	ul.project_list, ol.card_list {
		@apply m-0 p-0;
	}
</style>
