<script lang="ts">
	import { onMount } from "svelte"

	import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

	import BaseLink from "@/components/general/links/base.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let address: string
	export let itemprop: string|undefined = undefined
	export let itemtype: string|undefined = undefined

	$: isInbound = address.includes(PUBLIC_PRODUCTION_BASE_URL)
	$: linkComponent = isInbound ? BaseLink : ExternalLink
</script>

<svelte:component
	this={linkComponent}
	{address}
	{itemprop}
	{itemtype}><slot></slot></svelte:component>
