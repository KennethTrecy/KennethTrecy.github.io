<script lang="ts">
	export let icon: string
	export let alternateName: string
	$: link = `https://cdn.simpleicons.org/${icon}/white`
</script>

<img class="h-4 w-auto" alt={alternateName} src={link}/>
