<script lang="ts">
	export let otherItemprop = ""

	export { otherItemprop as itemprop }

	$: itemprop = otherItemprop === "" ? "keywords" : `${otherItemprop} keywords`
</script>

<strong {itemprop}><slot></slot></strong>
