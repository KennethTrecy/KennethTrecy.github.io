<script lang="ts">
	import type { ListVariant } from "@/types/container_info"

	export let itemprop: string = "itemListElement"
	export let itemtype: string = "https://schema.org/ListItem"
	export let variant: ListVariant = "normal"
	let otherClasses: string[] = []

	$: initialClasses = variant === "project"
		? [ "project_list" ]
		: variant === "card"
			? [ "card_list" ]
			: []
	export { otherClasses as class }
</script>

<li
	{itemprop}
	itemscope
	{itemtype}
	class={[ ...initialClasses, ...otherClasses].join(" ")}>
	<slot></slot>
</li>

<style lang="postcss">
	li.project_list, li.card_list {
		@apply m-0 p-0;
	}
</style>
