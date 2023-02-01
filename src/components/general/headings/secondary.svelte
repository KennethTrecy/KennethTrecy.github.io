<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import Icon from "@/components/general/icon.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"

	let isMouseIn = false
	let otherClasses: string[] = []

	export let mustBeRaw: boolean = false
	export let headingInfo: HeadingInfo<"defined">

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = Boolean(headingInfo.prefix)
	$: fragment = `#${headingInfo.id}`
</script>

<h2
	class={joinedClasses}
	on:mouseout={_event => isMouseIn = false}
	on:blur={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}
	on:focus={_event => isMouseIn = true}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span>{headingInfo.text}<slot></slot></span>
	{:else}
		<span itemprop="headline name">{headingInfo.text}<slot></slot></span>
	{/if}

	<Bookmark
		{fragment}
		class={[ isMouseIn ? "visible" : "invisible" ]}>
		<Icon name="link"/>
	</Bookmark>
</h2>
