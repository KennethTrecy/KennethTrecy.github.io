<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"

	import BoundLink from "@/components/general/links/bound.svelte"

	export let info: ReferenceInfo

	$: titleLinkComponent = info.category === "inbound"
		? BaseLink
		: ExternalLink
	$: entityName = typeof info.author.givenName !== undefined
		? `${info.author.givenName} ${info.author.familyName}`
		: info.author.groupName
</script>

<cite itemprop="citation" itemscope itemtype={info.itemtype}>
	<svelte:component
		this={titleLinkComponent}
		address={info.link}
		itemprop="mainEntityOfPage">{info.title}</svelte:component>
	made by
	<BoundLink address={info.author.link}>{entityName}</BoundLink>
	<!-- TODO: structure data further -->
	is licensed under
	<BoundLink address={info.license.link}>{info.license.name}</BoundLink>.
</cite>
