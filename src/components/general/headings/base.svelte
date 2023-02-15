<script lang="ts">
	import Icon from "@/components/general/icon.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"

	export let level: number
	export let fragment: string
	export let mayUseBookmark: boolean = true
	let otherClasses: string[] = []

	export { otherClasses as class }

	let isMouseIn = false

	$: joinedClasses = [
		...otherClasses
	].filter(Boolean).join(" ") || undefined
	$: tag = level == 1
		? "h1"
		: level === 2
			? "h2"
			: "h3"
</script>

<svelte:element
	this={tag}
	class={joinedClasses}
	on:mouseout={_event => isMouseIn = false}
	on:blur={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}
	on:focus={_event => isMouseIn = true}>
	<slot></slot>
	{#if mayUseBookmark}
		<Bookmark
			{fragment}
			class={[ isMouseIn ? "" : "hidden" ]}>
			<Icon name="link"/>
		</Bookmark>
	{/if}
</svelte:element>
