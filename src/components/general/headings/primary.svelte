<script lang="ts">
	import Icon from "@/components/general/icon.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"

	let otherClasses: string = ""
	export let prefix: string = ""

	let isMouseIn = false

	export { otherClasses as class }

	$: joinedClasses = [
		"prose md:prose-lg text-center md:text-left",
		otherClasses
	].filter(Boolean).join(" ")
	$: hasPrefix = prefix !== ""
</script>

<h1
	class={joinedClasses}
	on:mouseout={_event => isMouseIn = false}
	on:blur={_event => isMouseIn = false}
	on:mouseover={_event => isMouseIn = true}
	on:focus={_event => isMouseIn = true}>
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

	<Bookmark
		fragment="#"
		class={[ isMouseIn ? "visible" : "invisible" ]}>
		<Icon name="link"/>
	</Bookmark>
</h1>
