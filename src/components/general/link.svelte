<script lang="ts">
	import type { AnchorLinkType } from "@/types/links"

	export let address: string
	export let type: AnchorLinkType|AnchorLinkType[]

	$: relationship = Array.isArray(type) ? type.sort().join(" ") : type
</script>

<a href={address} class="link" rel={relationship}>
	<slot></slot>
</a>
