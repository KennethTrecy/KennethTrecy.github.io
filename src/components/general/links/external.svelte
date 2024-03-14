<script lang="ts">
	import { type AnchorLinkType } from "@/types/container_info"

	import { externalTypes } from "@/components/general/links/constants"

	import Link from "@/components/general/links/base.svelte"

	export let address: string
	export let itemprop: string|undefined = undefined
	export let itemtype: string|undefined = undefined
	export let relationship: AnchorLinkType|AnchorLinkType[] = []

	$: relationshipTypes = [
		...externalTypes,
		...Array.isArray(relationship)
			? relationship
			: [ relationship ]
	]
</script>

<Link address={address} relationship={relationshipTypes} context="other" {itemprop} {itemtype}>
	<slot></slot>
</Link>
