<script lang="ts">
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let platformName: string
	export let username: string
</script>

<a
	title={platformName}
	href={address}
	rel="me"
	class="inline-flex flex-row flex-nowrap items-center">
	<BrandIcon {icon} alternateName={platformName}/>
	<span class="ml-4">{username}</span>
</a>
