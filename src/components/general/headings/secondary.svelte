<script lang="ts">
	import type { HeadingInfo } from "@/types/container_info"
	import Subheading from "@/components/general/headings/subheading.svelte"

	export let headingInfo: HeadingInfo<"defined">
	export let mustBeRaw: boolean = false
	export let isHeadlineProperty: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
</script>

<Subheading level={2} {headingInfo} {mustBeRaw} {isHeadlineProperty} class={joinedClasses}>
	<slot></slot>
</Subheading>
