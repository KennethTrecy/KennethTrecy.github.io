<script lang="ts">
	// @deprecated since v2.1.0. It will be removed as it is not used anywhere.
	import type { MultimediaInfo } from "@/types/content_metadata"

	import makeSet from "@/components/general/image/make_set"

	export let info: MultimediaInfo
	export let itemprop: string|undefined = undefined
	let otherClasses: string[] = []

	export { otherClasses as class }

	const initialClasses = []

	$: sourceSet = makeSet(info.responsiveLinks)
	$: joinedClasses = [ ...initialClasses, ...otherClasses].join(" ")
	$: style = [
		`width: ${info.defaultWidth}px; height: ${info.defaultHeight}px`,
		`min-width: ${info.defaultWidth}px; min-height: ${info.defaultHeight}px`,
		`max-width: ${info.defaultWidth}px; max-height: ${info.defaultHeight}px`
	].join(";")
</script>

<picture {itemprop} class={joinedClasses} {style}>
	<source srcset={sourceSet}/>
	<img
		src={info.defaultLink}
		alt={info.description}
		width={info.defaultWidth}
		height={info.defaultHeight}/>
</picture>
