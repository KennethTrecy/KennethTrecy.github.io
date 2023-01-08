<script lang="ts">
	export let address: string
</script>

<a href={address} rel="nofollow" class="link">
	<slot></slot>
</a>
