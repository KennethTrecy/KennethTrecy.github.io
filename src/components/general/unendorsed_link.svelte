<script lang="ts">
	import Link from "@/components/general/link.svelte"

	export let address: string
</script>

<Link address={address} type={[ "nofollow", "noopener" ]}>
	<slot></slot>
</Link>
