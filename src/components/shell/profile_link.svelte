<script lang="ts">
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address
	export let icon
	export let name
</script>

<a title={name} href={address} rel="me">
	<BrandIcon {icon} alternateName={name}/>
</a>
