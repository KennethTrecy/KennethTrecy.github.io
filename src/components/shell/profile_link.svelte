<script lang="ts">
	import { externalTypes, authorTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"
	import BrandIcon from "@/components/general/brand_icon.svelte"

	export let address: string
	export let icon: string
	export let name: string

	const relationships = [ ...externalTypes, ...authorTypes ]
</script>

<Link title={name} {address} relationship={relationships}>
	<BrandIcon {icon} alternateName={name}/>
</Link>
