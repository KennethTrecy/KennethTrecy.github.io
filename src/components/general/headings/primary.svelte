<script lang="ts">
	let otherClasses: string = ""
	export let prefix: string = ""

	export { otherClasses as class }

	$: joinedClasses = [ "prose md:prose-lg", otherClasses ].filter(Boolean).join(" ")
	$: hasPrefix = prefix !== ""
</script>

{#if hasPrefix}
	<h1 class={joinedClasses}>
		<span class="text-5xl">
			<span>{prefix}</span>
			<span itemprop="headline name"><slot></slot></span>
		</span>
	</h1>
{:else}
	<h1
		class={joinedClasses}
		itemprop="headline name">
		<span class="text-5xl">
			<slot></slot>
		</span>
	</h1>
{/if}
