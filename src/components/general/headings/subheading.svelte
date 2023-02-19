<script lang="ts">
	import type { HeadingInfo } from "@/types/container_info"

	import Heading from "@/components/general/headings/base.svelte"

	export let level: number
	export let mustBeRaw: boolean
	export let isHeadlineProperty: boolean
	export let headingInfo: HeadingInfo<"defined">
	export let mayUseBookmark: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
	$: hasPrefix = Boolean(headingInfo.prefix)
	$: fragment = `#${headingInfo.id}`
	$: itemprop = isHeadlineProperty ? "headline name": "name"
</script>

<Heading {level} {fragment} {mayUseBookmark} class={joinedClasses}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span>{headingInfo.text}<slot></slot></span>
	{:else}
		<span {itemprop}>{headingInfo.text}<slot></slot></span>
	{/if}
</Heading>
