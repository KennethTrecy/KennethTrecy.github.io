<script lang="ts">
	import type { MultimediaInfo } from "@/types/content"

	import makeSet from "@/components/general/make_set"

	export let info: MultimediaInfo
	let otherClasses: string[] = []

	export { otherClasses as class }

	const initialClasses = []

	$: sourceSet = makeSet(info.responsiveLinks)
	$: joinedClasses = [ ...initialClasses, ...otherClasses].join(" ")
</script>

<picture class={joinedClasses}>
	<source srcset={sourceSet}/>
	<img src={info.defaultLink} alt={info.description}/>
</picture>
