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
	$: designers = pageMeta.designers
		.map(person => `${person.givenName} ${person.familyName}`)
		.join(" ")
	$: canonicalURL = `https://kennethtrecy.pages.dev${pageMeta.path}`
</script>

<title>{pageMeta.title}</title>
<link rel="icon" href="favicon.ico" />
<link rel="canonical" href={canonicalURL}/>
<meta name="description" content={pageMeta.description}/>
<meta name="keywords" content={pageMeta.keywords.join(",")}/>
<meta name="page-version" content={pageMeta.version}/>
{#each pageMeta.authors as author}
	<meta name="author" content={`${author.givenName} ${author.familyName}`}/>
	<link rel="author" href={author.link}/>
{/each}
<meta name="web_author" content={`${pageMeta.encoder.givenName} ${pageMeta.encoder.familyName}`}/>
<meta name="creator" content={`${pageMeta.creator.givenName} ${pageMeta.creator.familyName}`}/>
<meta name="designer" content={designers}/>
<link rel="license" href={pageMeta.license.link}/>
<meta name="license" content={pageMeta.license.name}/>
<meta name="og:title" content={pageMeta.title}/>
<meta name="og:type" content="website"/>
<meta name="og:image" content={imageURL}/>
<meta name="og:url" content={pageURL}/>
<meta name="og:description" content={pageMeta.description}/>
<meta name="og:sitename" content="KennethTrecy"/>
