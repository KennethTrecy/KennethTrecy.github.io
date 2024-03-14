<script lang="ts">
	import { type HeadingInfo, type SubheadingVariant } from "@/types/container_info"
	import Subheading from "@/components/general/headings/subheading.svelte"

	export let headingInfo: HeadingInfo<"defined">
	export let variant: SubheadingVariant = "headline"
	export let mayUseBookmark = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
</script>

<Subheading level={3} {headingInfo} {variant} {mayUseBookmark} class={joinedClasses}>
	<slot></slot>
</Subheading>
