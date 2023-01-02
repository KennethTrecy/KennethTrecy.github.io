<script lang="ts">
	export let icon
	$: link = `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${icon}.svg`
</script>

<img src={icon}/>
