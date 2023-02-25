<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"

	import BaseLink from "@/components/general/links/base.svelte"
	import BoundLink from "@/components/general/links/bound.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo

	$: titleLinkComponent = info.category === "inbound"
		? BaseLink
		: ExternalLink
	$: isAuthoredByPerson = typeof info.author.givenName !== "undefined"
	$: hasLicense = typeof info.license !== "undefined"
</script>

<cite itemprop="citation" itemscope itemtype={info.itemtype}>
	<svelte:component
		this={titleLinkComponent}
		address={info.link}
		itemprop="mainEntityOfPage">{info.title}</svelte:component>
	made by
	{#if isAuthoredByPerson}
		<BoundLink
			address={info.author.link}
			itemprop="author"
			itemtype="https://schema.org/Person">
			<span itemprop="name">
				<span itemprop="givenName">{info.author.givenName}</span>
				<span itemprop="familyName">{info.author.familyName}</span>
			</span>
		</BoundLink>
	{:else}
		<BoundLink
			address={info.author.link}
			itemprop="author"
			itemtype="https://schema.org/Organization">
			<span itemprop="name">{info.author.groupName}</span>
		</BoundLink>
	{/if}
	{#if hasLicense}
		is licensed under
		<BoundLink address={info.license.link} itemprop="license">{info.license.name}</BoundLink>
	{/if}
</cite>
