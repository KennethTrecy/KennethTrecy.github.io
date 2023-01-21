<script lang="ts">
	export let address: string
</script>

<a href={address} class="link">
	<slot></slot>
</a>
