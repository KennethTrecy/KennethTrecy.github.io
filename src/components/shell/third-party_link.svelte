<script lang="ts">
	import UnendorsedLink from "@/components/general/unendorsed_link.svelte"

	export let packageName: string
	export let homeLink: string
	export let licenseName: string
	export let licenseLink: string
</script>

<UnendorsedLink address={homeLink}>{packageName}</UnendorsedLink>
(<UnendorsedLink address={licenseLink}>{licenseName}</UnendorsedLink>)
