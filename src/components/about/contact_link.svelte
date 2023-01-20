<script lang="ts">
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let platformName: string
	export let username: string
</script>

<a title={platformName} href={address} rel="me">
	<BrandIcon {icon} alternateName={platformName}/>
	<span>{username}</span>
</a>
