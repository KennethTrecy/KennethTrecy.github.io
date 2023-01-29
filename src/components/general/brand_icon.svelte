<script lang="ts">
	import { textColor } from "@/components/general/theme"

	export let icon: string
	export let alternateName: string
	$: link = `https://cdn.simpleicons.org/${icon}/${$textColor}`
</script>

<img class="h-8 w-auto" alt={alternateName} width="32" height="32" src={link}/>
