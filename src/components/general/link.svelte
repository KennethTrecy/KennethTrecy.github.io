<script lang="ts">
	import type { AnchorTarget, AnchorLinkType } from "@/types/links"

	export let address: string
	export let context: AnchorTarget = "self"
	export let type: AnchorLinkType|AnchorLinkType[]

	$: relationship = Array.isArray(type) ? type.sort().join(" ") : type
	$: target = context === "self" ? "_self" : "_blank"
</script>

<a href={address} class="link" rel={relationship} {target}>
	<slot></slot>
</a>
