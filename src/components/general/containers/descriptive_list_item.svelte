<script lang="ts">
	import type { ListVariant } from "@/types/container_info"

	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	export let itemprop: string = "itemListElement"
	export let itemtype: string = "https://schema.org/ListItem"
	export let variant: ListVariant = "normal"
	let otherClasses: string[] = []

	$: initialClasses = []
	export { otherClasses as class }
</script>

<StructuredListItem
	{itemprop}
	{variant}
	{itemtype}
	class={[ ...initialClasses, ...otherClasses] }>
	<span itemprop="item" itemscope itemtype="https://schema.org/Thing">
		<span itemprop="description"><slot></slot></span>
	</span>
</StructuredListItem>
