<script lang="ts">
	import type { AnchorTarget, AnchorLinkType } from "@/types/container_info"

	export let address: string
	export let relationship: AnchorLinkType|AnchorLinkType[]

	export let context: AnchorTarget = "self"
	export let mayIndicateExternal = true
	export let title: string|undefined = undefined
	export let itemprop: string|undefined = undefined
	export let itemtype: string|undefined = undefined
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: relationshipTypes = Array.isArray(relationship) ? relationship.sort().join(" ") : relationship
	$: target = context === "self" ? "_self" : "_blank"
	$: hasExternal = Array.isArray(relationship)
		? relationship.indexOf("external") > -1
		: relationship === "external"
	$: mayShowExternalIcon = hasExternal && mayIndicateExternal
	$: joinedClasses = [
		"link",
		...otherClasses
	].filter(Boolean).join(" ")
	$: itemscope = typeof itemtype === "undefined" ? undefined : ""
	$: label = `Link to ${address}`

	function visitLink(event: KeyboardEvent): void {
		if (event.key === "Enter") {
			location.href = address
		}
	}
</script>

<a
	{title}
	{itemprop}
	href={address}
	class={joinedClasses}
	rel={relationshipTypes}
	{target}
	{itemscope}
	{itemtype}>
	<slot></slot></a>{#if mayShowExternalIcon}<span
	class="cursor-pointer"
	role="link"
	tabindex="0"
	aria-label={label}
	on:keyup={visitLink}></span>{/if}

<style lang="postcss">
	span::after {
		font-family: "Material Symbols Outlined";
		content: "north_east";
	}
</style>
