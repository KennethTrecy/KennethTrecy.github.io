<script lang="ts">
	import { externalTypes, authorTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let platformName: string
	export let username: string
	export let usernameProperty: string

	const relationships = [ ...externalTypes, ...authorTypes ]
</script>

<Link
	title={platformName}
	{address}
	relationship={relationships}
	class={[ "inline-flex", "flex-row", "flex-nowrap", "items-center" ]}>
	<BrandIcon {icon} alternateName={platformName}/>
	<span itemprop={usernameProperty} class="ml-4">{username}</span>
</Link>
