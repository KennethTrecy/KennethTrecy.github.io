<script lang="ts">
	export let id: string|undefined = undefined
	export let itemprop = "hasPart"
	export let itemtype = "https://schema.org/WebContent"
	export let itemid: string|undefined = undefined

	let otherClasses: string[] = []

	export { otherClasses as class }

	$: resolvedItemID = itemid ?? (typeof id === "undefined" ? undefined : `#${id}`)
</script>

<section
	{itemprop}
	itemscope
	{itemtype}
	{id}
	itemid={resolvedItemID}
	class={otherClasses.join(" ")}>
	<slot></slot>
</section>
