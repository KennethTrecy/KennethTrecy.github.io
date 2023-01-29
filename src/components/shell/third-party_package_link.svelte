<script lang="ts">
	import ExternalLink from "@/components/general/links/external.svelte"

	export let packageName: string
	export let homeLink: string
	export let licenseName: string
	export let licenseLink: string
</script>

<ExternalLink address={homeLink} itemprop="name">{packageName}</ExternalLink>
(<ExternalLink address={licenseLink} itemprop="license">{licenseName}</ExternalLink>)
