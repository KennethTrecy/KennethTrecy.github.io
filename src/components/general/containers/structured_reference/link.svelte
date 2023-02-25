<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"

	import BaseLink from "@/components/general/links/base.svelte"
	import BoundLink from "@/components/general/links/bound.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo

	$: titleLinkComponent = info.category === "inbound"
		? BaseLink
		: ExternalLink
	$: entityName = typeof info.author.givenName !== undefined
		? `${info.author.givenName} ${info.author.familyName}`
		: info.author.groupName
	$: hasLicense = typeof info.license !== "undefined"
</script>

<cite itemprop="citation" itemscope itemtype={info.itemtype}>
	<svelte:component
		this={titleLinkComponent}
		address={info.link}
		itemprop="mainEntityOfPage">{info.title}</svelte:component>
	made by
	<BoundLink address={info.author.link}>{entityName}</BoundLink>
	<!-- TODO: structure data further -->
	{#if hasLicense}
		is licensed under
		<BoundLink address={info.license.link}>{info.license.name}</BoundLink>.
	{/if}
</cite>
