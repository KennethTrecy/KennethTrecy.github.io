<script lang="ts">
	let otherClasses: string = ""
	export let prefix: string = ""

	export { otherClasses as class }

	$: joinedClasses = [
		"prose md:prose-lg text-center md:text-left",
		otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = prefix !== ""
</script>

<h1 class={joinedClasses}>
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
</h1>
