<script lang="ts">
	export let isInProjectList: boolean = false
	export let itemprop: string = "itemListElement"
	export let itemtype: string = "https://schema.org/ListItem"
	let otherClasses: string[] = []

	const initialClasses = isInProjectList ? [ "project_list" ] : []
	export { otherClasses as class }
</script>

<li
	{itemprop}
	itemscope
	{itemtype}
	class={[ ...initialClasses, ...otherClasses].join(" ")}>
	<slot></slot>
</li>

<style lang="postcss">
	li.project_list {
		@apply m-0 p-0;
	}
</style>
