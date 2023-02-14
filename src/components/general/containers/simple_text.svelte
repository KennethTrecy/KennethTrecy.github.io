<script lang="ts">
	export let otherItemprop: string = ""

	export { otherItemprop as itemprop }

	$: itemprop = otherItemprop === "" ? "text" : `${otherItemprop} text`
</script>

<p {itemprop}>
	<slot></slot>
</p>
