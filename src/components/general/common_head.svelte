<script lang="ts">
	import { type PageMeta } from "@/types/content_metadata"

	import { dev } from "$app/environment"
	import {
		PUBLIC_MINIMUM_TITLE_LENGTH,
		PUBLIC_PRODUCTION_BASE_URL,
		PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH
	} from "$env/static/public"

	import Logo from "@/multimedia/logo.png"

	export let pageMeta: PageMeta

	$: if (dev && pageMeta.description.length > Number(PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH)) {
		console.warn(`Description for page entitled "${pageMeta.title}" is too long.`)
	}
	$: if (dev && pageMeta.title.length < Number(PUBLIC_MINIMUM_TITLE_LENGTH)) {
		console.warn(`Title for page entitled "${pageMeta.title}" is too short.`)
	}
	$: pageURL = `https://kennethtrecy.pages.dev${pageMeta.path}`
	$: imageURL = `https://kennethtrecy.pages.dev${Logo}`
	$: designers = pageMeta.designers
		.map(person => `${person.givenName} ${person.familyName}`)
		.join(" ")
	$: canonicalURL = `${PUBLIC_PRODUCTION_BASE_URL}${pageMeta.path}`
</script>

<title>{pageMeta.title}</title>
<link rel="icon" href={Logo}/>
<link rel="canonical" href={canonicalURL}/>

<meta name="description" content={pageMeta.description}/>
<meta name="keywords" content={pageMeta.keywords.join(",")}/>
<meta name="page-version" content={pageMeta.version}/>
<link rel="license" href={pageMeta.license.link}/>
<meta name="license" content={pageMeta.license.name}/>

{#each pageMeta.authors as author}
	<meta name="author" content={`${author.givenName} ${author.familyName}`}/>
	<link rel="author" href={author.link}/>
{/each}
<meta name="web_author" content={`${pageMeta.encoder.givenName} ${pageMeta.encoder.familyName}`}/>
<meta name="creator" content={`${pageMeta.creator.givenName} ${pageMeta.creator.familyName}`}/>
<meta name="designer" content={designers}/>

<meta name="og:title" content={pageMeta.title}/>
<meta name="og:type" content={pageMeta.objectType}/>
<meta name="og:image" content={pageMeta.image.defaultLink}/>
<meta name="og:image:alt" content={pageMeta.image.description}/>
<meta name="og:image:width" content={`${pageMeta.image.defaultWidth}`}/>
<meta name="og:image:height" content={`${pageMeta.image.defaultHeight}`}/>
{#each pageMeta.image.responsiveLinks as linkInfo}
	<meta name="og:image" content={linkInfo.link}/>
	<meta name="og:image:alt" content={pageMeta.image.description}/>
	<meta name="og:image:width" content={`${linkInfo.intrinsicWidth}`}/>
{/each}
<meta name="og:url" content={pageMeta.pageURL}/>
<meta name="og:description" content={pageMeta.description}/>
<meta name="og:site_name" content="KennethTrecy"/>
