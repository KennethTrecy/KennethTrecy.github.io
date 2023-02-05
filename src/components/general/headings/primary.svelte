<script lang="ts">
	import { MAIN_CONTENT_ID } from "@/constants/miscellaneous_meta"

	import Heading from "@/components/general/headings/base.svelte"

	let otherClasses: string[] = []
	export let prefix: string = ""
	export { otherClasses as class }

	$: joinedClasses = [
		"prose",
		"md:prose-lg",
		"text-center",
		"md:text-left",
		...otherClasses
	]
	$: hasPrefix = prefix !== ""
</script>

<Heading level={1} fragment={MAIN_CONTENT_ID} class={joinedClasses}>
	{#if hasPrefix}
		<span class="text-5xl">
			<span>{prefix}</span>
			<span itemprop="headline name"><slot></slot></span>
		</span>
	{:else}
		<span itemprop="headline name" class="text-5xl">
			<slot></slot>
		</span>
	{/if}
</Heading>
