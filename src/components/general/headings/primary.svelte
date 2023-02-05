<script lang="ts">
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

<Heading level={1} fragment="#" class={joinedClasses}>
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
