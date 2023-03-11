<script lang="ts">
	import type { HeadingInfo, SubheadingVariant } from "@/types/container_info"

	import Heading from "@/components/general/headings/base.svelte"

	export let level: number
	export let variant: SubheadingVariant
	export let headingInfo: HeadingInfo<"defined">
	export let mayUseBookmark: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
	$: hasPrefix = Boolean(headingInfo.prefix)
	$: fragment = `#${headingInfo.id}`
	$: itemprop = variant === "headline"
		? "headline name"
		: variant === "term"
			? "termCode name"
			: variant ==="name"
				? "name"
				: undefined
</script>

<Heading {level} {fragment} {mayUseBookmark} class={joinedClasses}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	<span {itemprop}>{headingInfo.text}<slot></slot></span>
</Heading>
