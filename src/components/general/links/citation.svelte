<script lang="ts">
	import { onMount } from "svelte"

	import type { ReferenceInfo } from "@/types/reference"

	import { internalTypes } from "@/components/general/links/constants"

	import { appendReference } from "@/components/general/containers/reference_info_collection.ts"

	import BaseLink from "@/components/general/links/base.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo
	export let itemprop: string|undefined = undefined

	onMount(async () => {
		appendReference(info)
	})

	$: linkComponent = info.linkCategory === "inbound"
		? BaseLink
		: ExternalLink
	$: relationship = info.linkCategory === "inbound"
		? internalTypes
		: []
</script>

<svelte:component
	this={linkComponent}
	address={info.link}
	{itemprop}
	{relationship}><slot></slot></svelte:component>
