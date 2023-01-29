<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import Icon from "@/components/general/icon.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"

	let isMouseIn = false
	let otherClasses: string[] = []

	export let mustBeRaw: boolean = false
	export let linkInfo: HeadingInfo<"defined">

	export { otherClasses as class }

	$: joinedClasses = [
		...otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = Boolean(linkInfo.prefix)
	$: fragment = `#${linkInfo.id}`
</script>

<h2
	class={joinedClasses}
	on:mouseout={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}>
	{#if hasPrefix}
		<span>{linkInfo.prefix}</span>
	{/if}

	{#if mustBeRaw}
		<span>{linkInfo.text}<slot></slot></span>
	{:else}
		<span itemprop="headline name">{linkInfo.text}<slot></slot></span>
	{/if}

	<Bookmark
		{fragment}
		class={[ isMouseIn ? "visible" : "invisible" ]}>
		<Icon name="link"/>
	</Bookmark>
</h2>
