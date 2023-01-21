<script lang="ts">
	import type { AnchorTarget, AnchorLinkType } from "@/types/link"

	export let address: string
	export let context: AnchorTarget = "self"
	export let relationship: AnchorLinkType|AnchorLinkType[]
	export let title: string = ""
	let group: string[] = []

	export { group as class }

	$: specifiedTitle = title ? title : undefined
	$: relationshipTypes = Array.isArray(relationship) ? relationship.sort().join(" ") : relationship
	$: target = context === "self" ? "_self" : "_blank"
</script>

<a
	title={specifiedTitle}
	href={address}
	class={[ "link", ...group ].join(" ")}
	rel={relationshipTypes} {target}>
	<slot></slot>
</a>
