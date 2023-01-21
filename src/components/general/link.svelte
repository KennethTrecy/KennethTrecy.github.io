<script lang="ts">
	import type { AnchorTarget, AnchorLinkType } from "@/types/links"

	export let address: string
	export let context: AnchorTarget = "self"
	export let relationship: AnchorLinkType|AnchorLinkType[]

	$: relationshipTypes = Array.isArray(relationship) ? relationship.sort().join(" ") : relationship
	$: target = context === "self" ? "_self" : "_blank"
</script>

<a href={address} class="link" rel={relationshipTypes} {target}>
	<slot></slot>
</a>
