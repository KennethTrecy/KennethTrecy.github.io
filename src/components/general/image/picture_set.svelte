<script lang="ts">
	import type { MultimediaInfo } from "@/types/content"

	import makeSet from "@/components/general/image/make_set"

	export let info: MultimediaInfo
	export let itemprop: string|undefined = undefined
	let otherClasses: string[] = []

	export { otherClasses as class }

	const initialClasses = []

	$: sourceSet = makeSet(info.responsiveLinks)
	$: joinedClasses = [ ...initialClasses, ...otherClasses].join(" ")
</script>

<picture {itemprop} class={joinedClasses}>
	<source srcset={sourceSet}/>
	<img
		src={info.defaultLink}
		alt={info.description}
		width={info.defaultWidth}
		height={info.defaultHeight}/>
</picture>
