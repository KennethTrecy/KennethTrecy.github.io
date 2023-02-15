<script lang="ts">
	import { onMount } from "svelte"

	import type { CodeFile, CompleteViewableFileInfo } from "@/types/body"

	import ExternalLink from "@/components/general/links/external.svelte"

	export let fileInfo: CompleteViewableFileInfo
	export let itemprop: string = "workExample"

	let codeInfo: CodeFile = {
		"content": "",
		"sha": "",
		"size": 0,
		"viewURL": ""
	}
	$: codeLines = codeInfo.content.split("\n")
	$: repoURL = `https://github.com/${fileInfo.owner}/${fileInfo.repo}`

	onMount(async () => {
		const repoNamespace = `${fileInfo.owner}/${fileInfo.repo}`
		const fileNamespace = `${fileInfo.branch}/${fileInfo.path}`
		const URL = `/api/v0/github/${repoNamespace}/code/${fileNamespace}`
		await fetch(URL, { "method": "GET" })
		.then(response => response.json())
		.then(rawCodeInfo => {
			codeInfo = rawCodeInfo as CodeFile
			codeInfo.content = atob(codeInfo.content)
		})
	})
</script>

<div {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
	<div class="mockup-code not-prose text-sm">
		{#each codeLines as line, i}
			<pre data-prefix={i+1}><code>{line}</code></pre>
		{/each}
	</div>
	<p itemprop="text" class="text-center text-sm">
		Content of
		<ExternalLink
			address={codeInfo.viewURL}
			itemprop="mainEntityOfPage">{fileInfo.path}</ExternalLink> in
		{fileInfo.branch}
		at <ExternalLink
			address={repoURL}
			itemprop="codeRepository">{fileInfo.owner}/{fileInfo.repo}</ExternalLink>
	</p>
	<slot {codeInfo}></slot>
</div>
