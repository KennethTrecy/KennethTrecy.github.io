<script lang="ts">
	import type { MultimediaInfo } from "@/types/content"

	import makeSet from "@/components/general/make_set"

	export let info: MultimediaInfo
	$: sourceSet = makeSet(info.responsiveLinks)
</script>

<picture>
	<source srcset={sourceSet}/>
	<img src={info.defaultLink} alt={info.description}/>
</picture>
