<script lang="ts">
	import Icon from "@/components/general/icon.svelte"
	import Link from "@/components/general/links/base.svelte"

	let isMouseIn = false
	let otherClasses: string = ""

	export let mustBeRaw: boolean = false
	export let fragment: string
	export let prefix: string = ""

	export { otherClasses as class }

	$: joinedClasses = [
		otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = prefix !== ""
</script>

<h2
	class={joinedClasses}
	on:mouseout={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}>
	{#if hasPrefix}
		<span>{prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span><slot></slot></span>
	{:else}
		<span itemprop="headline name"><slot></slot></span>
	{/if}

	<Link
		address={fragment}
		class={[ isMouseIn ? "visible" : "invisible" ]}
		relationship={[ "bookmark" ]}
		context="self">
		<Icon name="link"/>
	</Link>
</h2>
