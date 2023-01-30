<script lang="ts">
	export let isInProjectList: boolean
	let otherClasses: string[] = []

	const initialClasses = isInProjectList ? [ "project_list" ] : []
	export { otherClasses as class }
</script>

<li
	itemprop="itemListElement"
	itemscope
	itemtype="https://schema.org/ListItem"
	class={[ ...initialClasses, ...otherClasses].join(" ")}>
	<slot></slot>
</li>

<style lang="postcss">
	li.project_list {
		@apply m-0 p-0;
	}
</style>
