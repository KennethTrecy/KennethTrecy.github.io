<script lang="ts">
	import { externalTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"

	export let address: string
</script>

<Link address={address} relationship={[ "nofollow", ...externalTypes ]} context="other">
	<slot></slot>
</Link>
