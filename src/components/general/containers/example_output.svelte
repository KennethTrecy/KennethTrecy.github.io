<script lang="ts">
	import { onMount } from "svelte"

	import type { CompleteCodeFileInfo, ExecutedCommandSetInfo } from "@/types/container_info"

	import ExternalLink from "@/components/general/links/external.svelte"
	import ExampleCommand from "@/components/general/containers/example_command.svelte"

	export let codeInfo: CompleteCodeFileInfo
	export let commandInfos: ExecutedCommandSetInfo
</script>

<ExampleCommand {commandInfos}>
	<svelte:fragment slot="caption">
		Output of
		<ExternalLink
			address={codeInfo.viewURL}
			itemprop={[ "mainEntityOfPage" ]}>{codeInfo.path}</ExternalLink>
	</svelte:fragment>
</ExampleCommand>
