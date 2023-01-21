<script lang="ts">
	import Link from "@/components/general/links/base.svelte"
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let platformName: string
	export let username: string

	$: relationships = [ "noopener", "external", "author", "me" ]
</script>

<Link {address} relationship={relationships}>
	<span title={platformName} class="inline-flex flex-row flex-nowrap items-center">
		<BrandIcon {icon} alternateName={platformName}/>
		<span class="ml-4">{username}</span>
	</span>
</Link>
