<script lang="ts">
	import Icon from "@/components/general/icon.svelte"
	import Link from "@/components/general/links/base.svelte"

	let isMouseIn = false
	let otherClasses: string = ""
	export let id: string
	export let prefix: string = ""

	export { otherClasses as class }

	$: hasPrefix = prefix !== ""
	$: fragment = `#${id}`
</script>

<h2
	class={otherClasses}
	{id}
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
	<Link
		address={fragment}
		class={[ isMouseIn ? "visible" : "invisible" ]}
		relationship={[ "bookmark" ]}
		context="self">
		<Icon name="link"/>
	</Link>
</h2>
