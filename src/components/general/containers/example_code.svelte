<script lang="ts">
	export let code: string

	$: lineOfCode = code.split("\n")
</script>

<div class="mockup-code not-prose">
	{#each lineOfCode as line, i}
		<pre data-prefix={i+1}><code>{line}</code></pre>
	{/each}
</div>
