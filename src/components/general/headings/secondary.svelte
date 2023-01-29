<script lang="ts">
	let otherClasses: string = ""
	export let prefix: string = ""

	export { otherClasses as class }

	$: hasPrefix = prefix !== ""
</script>

<h2 class={otherClasses}>
	{#if hasPrefix}
		<span class="text-5xl">
			<span>{prefix}</span>
			<span itemprop="headline name"><slot></slot></span>
		</span>
	{:else}
		<span itemprop="headline name" class="text-5xl">
			<slot></slot>
		</span>
	{/if}
</h2>
