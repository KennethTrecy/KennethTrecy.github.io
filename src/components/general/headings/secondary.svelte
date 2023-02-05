<script lang="ts">
	import type { HeadingInfo } from "@/types/body"
	import Subheading from "@/components/general/headings/subheading.svelte"

	let otherClasses: string[] = []

	export let mustBeRaw: boolean = false
	export let headingInfo: HeadingInfo<"defined">

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
	$: hasPrefix = Boolean(headingInfo.prefix)
</script>

<Subheading level={2} class={joinedClasses} {headingInfo}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span>{headingInfo.text}<slot></slot></span>
	{:else}
		<span itemprop="headline name">{headingInfo.text}<slot></slot></span>
	{/if}
</Subheading>
