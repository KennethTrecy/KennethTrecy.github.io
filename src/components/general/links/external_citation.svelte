<script lang="ts">
	import { onMount } from "svelte"

	import type { ReferenceInfo } from "@/types/reference"

	import { appendReference } from "@/components/general/containers/reference_info_collection.ts"

	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo
	export let itemprop: string|undefined = undefined

	onMount(async () => {
		appendReference(info)
	})
</script>

<ExternalLink address={info.link} {itemprop}><slot></slot></ExternalLink>
