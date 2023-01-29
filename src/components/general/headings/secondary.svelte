<script lang="ts">
	import Icon from "@/components/general/icon.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"

	let isMouseIn = false
	let otherClasses: string = ""

	export let mustBeRaw: boolean = false
	export let fragmentID: string
	export let prefix: string = ""

	export { otherClasses as class }

	$: joinedClasses = [
		otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = prefix !== ""
	$: fragment = `#${fragmentID}`
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

	<Bookmark
		{fragment}
		class={[ isMouseIn ? "visible" : "invisible" ]}>
		<Icon name="link"/>
	</Bookmark>
</h2>
