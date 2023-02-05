<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import Heading from "@/components/general/headings/base.svelte"

	export let level: number
	let otherClasses: string[] = []
	export let headingInfo: HeadingInfo<"defined">

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
	$: fragment = `#${headingInfo.id}`
</script>

<Heading {level} {fragment} class={joinedClasses}>
	<slot></slot>
</Heading>
