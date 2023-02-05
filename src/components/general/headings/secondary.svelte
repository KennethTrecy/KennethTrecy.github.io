<script lang="ts">
	import type { HeadingInfo } from "@/types/body"
	import Subheading from "@/components/general/headings/subheading.svelte"


	export let headingInfo: HeadingInfo<"defined">
	export let mustBeRaw: boolean = false
	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	]
</script>

<Subheading level={2} {headingInfo} {mustBeRaw} class={joinedClasses}/>
