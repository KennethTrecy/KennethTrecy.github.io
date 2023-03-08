<script lang="ts">
	import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

	import { internalTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let address: string
	export let itemprop: string|undefined = undefined
	export let itemtype: string|undefined = undefined

	$: isInbound = address.includes(PUBLIC_PRODUCTION_BASE_URL)
	$: linkComponent = isInbound ? BaseLink : ExternalLink
	$: relationship = isInbound ? internalTypes : []
</script>

<svelte:component
	this={linkComponent}
	{address}
	{itemprop}
	{itemtype}
	{relationship}><slot></slot></svelte:component>
