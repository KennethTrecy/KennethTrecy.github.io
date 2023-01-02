<script lang="ts">
	import { textColor } from "@/components/general/theme"

	export let icon: string
	export let alternateName: string
	$: link = `https://cdn.simpleicons.org/${icon}/${$textColor}`
</script>

<img class="h-4 w-auto" alt={alternateName} src={link}/>
