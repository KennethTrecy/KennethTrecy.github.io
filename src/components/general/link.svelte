<script lang="ts">
	import { AnchorLinkType } from "@/types/links"

	export let address: string
	export let types: AnchorLinkType|AnchorLinkType[]

	$: relationship = Array.isArray(types) ? types.join(" ") : types
</script>

<a href={address} class="link" rel={relationship}>
	<slot></slot>
</a>
