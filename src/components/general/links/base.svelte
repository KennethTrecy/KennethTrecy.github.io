<script lang="ts">
	import type { AnchorTarget, AnchorLinkType } from "@/types/link"

	export let address: string
	export let context: AnchorTarget = "self"
	export let mayIndicateExternal = true
	export let relationship: AnchorLinkType|AnchorLinkType[]
	export let title: string|undefined = undefined
	export let itemprop: string|undefined = undefined
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: relationshipTypes = Array.isArray(relationship) ? relationship.sort().join(" ") : relationship
	$: target = context === "self" ? "_self" : "_blank"
	$: hasExternal = Array.isArray(relationship)
		? relationship.indexOf("external") > -1
		: relationship === "external"
	$: joinedClasses = [
		hasExternal && mayIndicateExternal ? "external_link" : "",
		...otherClasses
	].filter(Boolean).join(" ")
</script>

<a
	{title}
	{itemprop}
	href={address}
	class={joinedClasses}
	rel={relationshipTypes} {target}>
	<span class="link"><slot></slot></span>
</a>

<style lang="postcss">
	.external_link::after {
		font-family: "Material Symbols Outlined";
		content: "north_east";
	}
</style>
