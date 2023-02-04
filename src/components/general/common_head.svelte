<script lang="ts">
	import type { PageMeta } from "@/types/head"

	import { dev } from "$app/environment"
	import { PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH } from "$env/static/public"

	import Logo from "@/multimedia/logo.png"

	export let pageMeta: PageMeta

	$: if (dev && pageMeta.description.length > Number(PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH)) {
		console.warn(`Description for page entitled "${pageMeta.title}" is too long.`)
	}
	$: pageURL = `https://kennethtrecy.pages.dev${pageMeta.path}`
	$: imageURL = `https://kennethtrecy.pages.dev${Logo}`
</script>

<title>{pageMeta.title}</title>
<meta name="description" content={pageMeta.description}/>
<meta name="keywords" content={pageMeta.keywords.join(",")}/>
<meta name="page-version" content={pageMeta.version}/>
<meta name="web_author" content={pageMeta.encoder}/>
<meta name="designer" content={pageMeta.designer.join(" ")}/>
<meta name="creator" content={pageMeta.creator}/>
<meta name="license" content={pageMeta.license}/>
<meta name="og:title" content={pageMeta.title}/>
<meta name="og:type" content="website"/>
<meta name="og:image" content={imageURL}/>
<meta name="og:url" content={pageURL}/>
