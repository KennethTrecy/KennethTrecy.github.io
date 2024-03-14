<script lang="ts">
	import { type ListVariant } from "@/types/container_info"

	import SimpleThing from "@/components/general/containers/simple_thing.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	export let itemprop = "itemListElement"
	export let itemtype = "https://schema.org/ListItem"
	export let variant: ListVariant = "normal"
	let otherClasses: string[] = []

	$: initialClasses = []
	export { otherClasses as class }
</script>

<StructuredListItem
	{itemprop}
	{variant}
	{itemtype}
	class={[ ...initialClasses, ...otherClasses ] }>
	<SimpleThing itemprop="description">
		<slot></slot>
	</SimpleThing>
</StructuredListItem>
