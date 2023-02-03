<script lang="ts">
	export const itemprop: string = "hasPart"
	export const itemtype: string = "https://schema.org/ItemList"

	export let isProjectList: boolean
	let otherClasses: string[] = []

	const initialClasses = isProjectList ? [ "project_list" ] : []
	export { otherClasses as class }
</script>

<ul
	itemprop="hasPart"
	itemscope
	itemtype="https://schema.org/ItemList"
	class={[ ...initialClasses, ...otherClasses].join(" ")}>
	<slot></slot>
</ul>

<style lang="postcss">
	ul.project_list {
		@apply m-0 p-0;
	}
</style>
