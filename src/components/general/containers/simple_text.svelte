<script lang="ts">
	export const otherItemprop: string = ""

	export { otherItemprop as itemprop }

	$: itemprop = otherItemprop === "" ? "text" : `${otherItemprop} text`
</script>

<p {itemprop}>
	<slot></slot>
</p>
