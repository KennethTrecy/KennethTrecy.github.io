<script lang="ts">
	import Link from "@/components/general/link.svelte"

	export let address: string
</script>

<Link address={address} relationship={[ "nofollow", "noopener" ]} context="other">
	<slot></slot>
</Link>
