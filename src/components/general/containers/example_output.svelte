<script lang="ts">
	import { onMount } from "svelte"

	import type { CompleteCodeFileInfo, ExecutedCommandSetInfo } from "@/types/container_info"

	import ExternalLink from "@/components/general/links/external.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"

	export let codeInfo: CompleteCodeFileInfo
	export let commandInfos: ExecutedCommandSetInfo

	$: repoURL = `https://github.com/${codeInfo.owner}/${codeInfo.repo}`
</script>

<div itemprop="hasPart" itemscope itemtype="https://schema.org/CreativeWork">
	<SimpleText itemprop="about">
		{commandInfos.description}
	</SimpleText>
	<div class="mockup-code not-prose text-sm">
		{#each commandInfos.commands as commandInfo}
			<pre data-prefix={"$"}><code>{commandInfo.command}</code></pre>
			{#each commandInfo.output as output}
				<pre><code>{output.text}</code></pre>
			{/each}
		{/each}
	</div>
	<p itemprop="text" class="text-center text-sm">
		Output of
		<ExternalLink
			address={codeInfo.viewURL}
			itemprop={[ "mainEntityOfPage" ]}>{codeInfo.path}</ExternalLink>
	</p>
</div>
