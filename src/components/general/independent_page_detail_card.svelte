<script lang="ts">
	import type { PageMeta } from "@/types/head"

	import { internalTypes, authorTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"

	export let pageMeta: PageMeta

	$: dateTimePublished = pageMeta.datePublished.toISOString()
	$: humanReadableDatePublished = pageMeta.datePublished.toLocaleString("en", {
		"dateStyle": "long",
		"timeStyle": "long",
		"timeZone": "UTC"
	})
	$: publishStatus = Number(pageMeta.version) < 1 ? "draft" : "published"
</script>

<div class="not-prose card bg-base-200">
	<section class="card-body">
		<h2 class="title">Page details</h2>
		<address itemprop="author" itemscope itemtype="https://schema.org/Person">
			This page was authored by
			<BaseLink
				address="/about_myself"
				relationship={[ ...internalTypes, ...authorTypes ]}
				itemprop="mainEntityOfPage">
				<span itemprop="name">
					<span itemprop="givenName">Kenneth Trecy</span>
					<span itemprop="familyName">Tobias</span></span></BaseLink>.
		</address>
		<em>
			Published last
			<time
				itemprop="datePublished"
				datetime={dateTimePublished}>{humanReadableDatePublished}</time>.
			It has not been modified since then.
			Version of the {publishStatus} page is
			"<span itemprop="version">{pageMeta.version}</span>".
		</em>
	</section>
</div>
