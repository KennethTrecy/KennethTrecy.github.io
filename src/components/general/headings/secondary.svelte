<script lang="ts">
	import Icon from "@/components/general/icon.svelte"

	let isMouseIn = false
	let otherClasses: string = ""
	export let prefix: string = ""

	export { otherClasses as class }

	$: hasPrefix = prefix !== ""
</script>

<h2
	class={otherClasses}
	on:mouseout={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}>
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
	<span class:invisible={!isMouseIn} class:visible={isMouseIn}>
		<Icon name="link"/>
	</span>
</h2>
