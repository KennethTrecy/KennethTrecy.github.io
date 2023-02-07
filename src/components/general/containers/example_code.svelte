<script lang="ts">
	import type { CodeFile, CompleteViewableFileInfo } from "@/types/body"

	export let fileInfo: CompleteViewableFileInfo

	let code: CodeFile = {
		"content": "",
		"sha": "",
		"size": 0,
		"viewURL": ""
	}
	$: codeLines = code.content.split("\n")
</script>

<div class="mockup-code not-prose">
	{#each codeLines as line, i}
		<pre data-prefix={i+1}><code>{line}</code></pre>
	{/each}
</div>
