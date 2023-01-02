<script lang="ts">
	import UnendorsedLink from "@/components/general/unendorsed_link.svelte"

	export let packageName
	export let homeLink
	export let licenseName
	export let licenseLink
</script>

<UnendorsedLink address={homeLink}>{packageName}</UnendorsedLink>
(<UnendorsedLink address={licenseLink}>{licenseName}</UnendorsedLink>)
