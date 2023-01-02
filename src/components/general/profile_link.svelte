<script lang="ts">
	import Icon from "@/components/general/icon.svelte"

	export let address
	export let icon
</script>

<a href={address} rel="me">
	<Icon {icon}/>
</a>
