<script lang="ts">
	import { onMount } from "svelte"

	import type { ReferenceInfo } from "@/types/reference"

	import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

	import { appendReference } from "@/components/general/containers/reference_info_collection.ts"

	import BaseLink from "@/components/general/links/base.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"

	export let info: ReferenceInfo

	onMount(async () => {
		appendReference(info)
	})

	$: isInbound = info.link.includes(PUBLIC_PRODUCTION_BASE_URL)
</script>
