<script lang="ts">
	export let id: string
	export let itemprop: string = "hasPart"
	export let itemtype: string = "https://schema.org/WebContent"

	let otherClasses: string[] = []

	export { otherClasses as class }
</script>

<section {itemprop} itemscope {itemtype} class={otherClasses.join(" ")} {id}>
	<slot></slot>
</section>
