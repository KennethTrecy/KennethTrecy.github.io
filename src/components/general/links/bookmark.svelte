<script lang="ts">
	import { internalTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"

	export let fragment: string
</script>

<Link address={fragment} relationship={[ "bookmark", ...internalTypes ]} context="self">
	<slot></slot>
</Link>
