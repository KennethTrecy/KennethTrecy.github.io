<script lang="ts">
	import type { PageMeta } from "@/types/content"
	import { externalTypes } from "@/components/general/links/constants"
	import {
		PUBLIC_PRODUCTION_BASE_URL,
		PUBLIC_MINIMUM_TITLE_LENGTH,
		PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH
	} from "$env/static/public"

	import Icon from "@/components/general/icon.svelte"

	export let articleMeta: PageMeta

	$: canonicalURL = `${PUBLIC_PRODUCTION_BASE_URL}${articleMeta.path}`
</script>

<div
	itemprop="item"
	itemscope
	itemtype="https://schema.org/Article"
	class="card not-prose text-left flex-1 bg-base-200 mr-4 mb-4">
	<div class="card-body">
		<a
			class="card-title flex flex-row items-center"
			itemprop={externalTypes.join(" ")}
			href={canonicalURL}>
			<h3 itemprop="name">{articleMeta.title}</h3>
			<Icon name="chevron_right"/>
		</a>
		<p itemprop="about text" class="prose">
			{articleMeta.description}
		</p>
	</div>
</div>
