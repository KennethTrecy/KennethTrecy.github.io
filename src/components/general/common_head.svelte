<script lang="ts">
	import type { PageMeta } from "@/types/head"

	import { dev } from "$app/environment"
	import { PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH } from "$env/static/public"

	export let pageMeta: PageMeta

	$: if (dev && pageMeta.description.length > Number(PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH)) {
		console.warn(`Description for page entitled "${pageMeta.title}" is too long.`)
	}
</script>

<title>{pageMeta.title}</title>
<meta name="description" content={pageMeta.description}/>
<meta name="keywords" content={pageMeta.keywords.join(",")}/>
<meta name="page-version" content={pageMeta.version}/>
<meta name="web_author" content={pageMeta.encoder}/>
<meta name="designer" content={pageMeta.designer.join(" ")}/>
<meta name="creator" content={pageMeta.creator}/>
<meta name="license" content={pageMeta.license}/>
