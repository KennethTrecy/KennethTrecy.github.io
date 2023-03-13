<script lang="ts">
	import type { ReferenceInfo, PersonInfo, LicenseInfo } from "@/types/reference"

	import { internalTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"
	import BoundLink from "@/components/general/links/bound.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo

	function isPerson(data: ReferenceInfo["author"]): data is PersonInfo {
		const hasGivenName = Object.keys(info.author).includes("givenName")
		return hasGivenName
	}
	function hasMultipleLicense(data: ReferenceInfo["license"]): data is LicenseInfo[] {
		return Array.isArray(data)
	}

	$: isInbound = info.linkCategory === "inbound"
	$: titleLinkComponent = isInbound ? BaseLink : ExternalLink
	$: relationship = isInbound ? internalTypes : []
</script>

<cite itemprop="item" itemscope itemtype={info.itemtype}>
	<span itemprop="copyrightNotice">
		<svelte:component
			this={titleLinkComponent}
			{relationship}
			address={info.link}
			itemprop="mainEntityOfPage">{info.title}</svelte:component>
		made by
		{#if isPerson(info.author)}
			<BoundLink
				address={info.author.link}
				itemprop="author copyrightHolder"
				itemtype="https://schema.org/Person">
				<span itemprop="name">
					<span itemprop="givenName">{info.author.givenName}</span>
					<span itemprop="familyName">{info.author.familyName}</span>
				</span>
			</BoundLink>
		{:else}
			<BoundLink
				address={info.author.link}
				itemprop="author copyrightHolder"
				itemtype="https://schema.org/Organization">
				<span itemprop="name">{info.author.groupName}</span>
			</BoundLink>
		{/if}
		{#if typeof info.license !== "undefined"}
			is licensed under
			{#if hasMultipleLicense(info.license)}
				{#each info.license as licenseInfo, i}
					{#if i === info.license.length - 1}
						and <BoundLink address={licenseInfo.link} itemprop="license">
							{licenseInfo.name}
						</BoundLink>
					{:else}
						<BoundLink address={licenseInfo.link} itemprop="license">
							{licenseInfo.name}</BoundLink>{#if info.license.length === 2}&nbsp;{:else}, {/if}
					{/if}
				{/each}
			{:else}
				<BoundLink address={info.license.link} itemprop="license">{info.license.name}</BoundLink>
			{/if}
		{/if}
	</span>
</cite>
