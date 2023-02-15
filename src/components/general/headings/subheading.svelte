<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import Heading from "@/components/general/headings/base.svelte"

	export let level: number
	export let mustBeRaw: boolean
	export let headingInfo: HeadingInfo<"defined">
	export let mayUseBookmark: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
	$: hasPrefix = Boolean(headingInfo.prefix)
	$: fragment = `#${headingInfo.id}`
</script>

<Heading {level} {fragment} {mayUseBookmark} class={joinedClasses}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span>{headingInfo.text}<slot></slot></span>
	{:else}
		<span itemprop="headline name">{headingInfo.text}<slot></slot></span>
	{/if}
</Heading>
