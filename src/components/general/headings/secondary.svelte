<script lang="ts">
	import type { HeadingInfo, SubheadingVariant } from "@/types/container_info"
	import Subheading from "@/components/general/headings/subheading.svelte"

	export let headingInfo: HeadingInfo<"defined">
	export let variant = "headline"
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
</script>

<Subheading level={2} {headingInfo} {variant} class={joinedClasses}>
	<slot></slot>
</Subheading>
