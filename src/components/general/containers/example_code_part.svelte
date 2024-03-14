<script lang="ts">
	export let filename: string
	export let rawCodeLines: string[]
	export let itemprop = "workExample"
	export let beginLineIndex = 0
	export let endLineIndex = Infinity

	$: targetBeginLineIndex = Math.max(0, beginLineIndex)
	$: targetEndLineIndex = Math.min(rawCodeLines.length, endLineIndex)
	$: codeLines = rawCodeLines.slice(targetBeginLineIndex, targetEndLineIndex)
</script>

<div class="code_container" {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
	<div class="mockup-code not-prose text-sm">
		{#each codeLines as line, i}
			<pre data-prefix={targetBeginLineIndex+i+1}><code>{line}</code></pre>
		{/each}
	</div>
	<p itemprop="text" class="text-center text-sm">
		Sample content of <b>{filename}</b>
	</p>
</div>

<style lang="postcss">
	.code_container {
		/**
		 * 3rem is the padding of the general `.container`.
		 */
		max-width: calc(100vw - 1rem * 2);
	}

	@screen lg {
		.code_container {
			@apply max-w-[100vw]
		}
	}
</style>
