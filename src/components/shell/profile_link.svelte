<script lang="ts">
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let name: string
</script>

<a title={name} href={address} rel="me">
	<BrandIcon {icon} alternateName={name}/>
</a>
