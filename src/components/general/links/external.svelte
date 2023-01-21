<script lang="ts">
	import Link from "@/components/general/links/base.svelte"

	export let address: string
</script>

<Link address={address} relationship={[ "external", "noopener" ]} context="other">
	<slot></slot>
</Link>
