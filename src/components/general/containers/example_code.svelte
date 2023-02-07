<script lang="ts">
	import { onMount } from "svelte"

	import type { CodeFile, CompleteViewableFileInfo } from "@/types/body"

	export let fileInfo: CompleteViewableFileInfo

	let codeInfo: CodeFile = {
		"content": "",
		"sha": "",
		"size": 0,
		"viewURL": ""
	}
	$: codeLines = codeInfo.content.split("\n")

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

<div class="mockup-code not-prose">
	{#each codeLines as line, i}
		<pre data-prefix={i+1}><code>{line}</code></pre>
	{/each}
</div>
