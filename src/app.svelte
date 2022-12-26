<script lang="ts">
	import "agnostic-svelte/css/common.min.css"
	import { Button } from "agnostic-svelte"
	export let name: string
</script>

<p>
	Hello {name}!
</p>
<Button mode="primary">Sample button</Button>

<style lang="scss">
	p {
		color: red
	}
</style>
