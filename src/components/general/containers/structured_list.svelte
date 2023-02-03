<script lang="ts">
	import type { Order } from "@/types/body"

	export let itemprop: string = "hasPart"
	export const itemtype: string = "https://schema.org/ItemList"

	export let isProjectList: boolean
	export let order: Order
	let otherClasses: string[] = []

	const initialClasses = isProjectList ? [ "project_list" ] : []
	export { otherClasses as class }

	$: joinedClasses = [ ...initialClasses, ...otherClasses].join(" ")
	$: listOrder = order === "unordered"
		? "https://schema.org/ItemListUnordered"
		: order === "ascending"
			? "https://schema.org/ItemListOrderAscending"
			: "https://schema.org/ItemListOrderDescending"
</script>

<link itemprop="itemListOrder" href={listOrder}/>
{#if order === "unordered"}
	<ul
		{itemprop}
		itemscope
		{itemtype}
		class={joinedClasses}>
		<slot></slot>
	</ul>
{:else}
	<ol
		{itemprop}
		itemscope
		{itemtype}
		class={joinedClasses}>
		<slot></slot>
	</ol>
{/if}

<style lang="postcss">
	ul.project_list {
		@apply m-0 p-0;
	}
</style>
