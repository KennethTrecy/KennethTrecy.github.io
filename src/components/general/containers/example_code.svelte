<script lang="ts">
	import { onMount } from "svelte"

	import type { CodeFile, CompleteViewableFileInfo } from "@/types/container_info"

	import ExternalLink from "@/components/general/links/external.svelte"

	export let fileInfo: CompleteViewableFileInfo
	export let itemprop: string = "workExample"
	export let beginLineIndex: number = 0
	export let endLineIndex: number = 0

	let codeInfo: CodeFile = {
		"content": "",
		"sha": "",
		"size": 0,
		"viewURL": ""
	}
	$: rawCodeLines = codeInfo.content.split("\n")
	$: targetBeginLineIndex = Math.max(0, beginLineIndex)
	$: targetEndLineIndex = Math.min(rawCodeLines.length, endLineIndex)
	$: codeLines = rawCodeLines.slice(targetBeginLineIndex, targetEndLineIndex)
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

<div class="code_container" {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
	<div class="mockup-code not-prose text-sm">
		{#each codeLines as line, i}
			<pre data-prefix={targetBeginLineIndex+i+1}><code>{line}</code></pre>
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
			itemprop="codeRepository">{fileInfo.owner}<wbr/>/{fileInfo.repo}</ExternalLink>
	</p>
	<slot {codeInfo}></slot>
</div>

<style lang="postcss">
	.code_container {
		/**
		 * 3rem is the padding of the container that contains this component.
		 */
		max-width: calc(100vw - 3rem * 2)
	}

	@screen lg {
		.code_container {
			@apply max-w-[100vw]
		}
	}
</style>
