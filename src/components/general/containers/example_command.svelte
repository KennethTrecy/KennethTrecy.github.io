<script lang="ts">
	import { onMount } from "svelte"

	import type { ExecutedCommandSetInfo } from "@/types/container_info"

	import ExternalLink from "@/components/general/links/external.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"

	export let commandInfos: ExecutedCommandSetInfo
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
		<slot name="caption"></slot>
	</p>
</div>
