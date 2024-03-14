<script lang="ts">
	import { externalTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"

	export let address: string
	export let itemprop: string|undefined
</script>

<Link address={address} relationship={[ "nofollow", ...externalTypes ]} context="other" {itemprop}>
	<slot></slot>
</Link>
