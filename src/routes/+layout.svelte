<script>
	import { PUBLIC_COMMIT_HASH } from "$env/static/public"

	import Shell from "@/components/shell.svelte"
</script>

<Shell commitHash={PUBLIC_COMMIT_HASH}>
	<slot slot="main"></slot>
</Shell>
