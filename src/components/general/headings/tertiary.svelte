<script lang="ts">
	import type { HeadingInfo } from "@/types/container_info"
	import Subheading from "@/components/general/headings/subheading.svelte"

	export let headingInfo: HeadingInfo<"defined">
	export let mustBeRaw: boolean = false
	export let mayUseBookmark: boolean = true
	export let isHeadlineProperty: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
</script>

<Subheading
	level={3}
	{headingInfo}
	{mustBeRaw}
	{mayUseBookmark}
	{isHeadlineProperty}
	class={joinedClasses}>
	<slot></slot>
</Subheading>
