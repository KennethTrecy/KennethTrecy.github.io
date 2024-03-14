<script lang="ts">
	export let otherItemprop = ""

	export { otherItemprop as itemprop }

	$: itemprop = otherItemprop === "" ? "text" : `${otherItemprop} text`
</script>

<p {itemprop}>
	<slot></slot>
</p>
