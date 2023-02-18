<script lang="ts">
	import type { PageMeta } from "@/types/content"
	import { internalTypes } from "@/components/general/links/constants"
	import {
		PUBLIC_PRODUCTION_BASE_URL,
		PUBLIC_MINIMUM_TITLE_LENGTH,
		PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH
	} from "$env/static/public"

	import Icon from "@/components/general/icon.svelte"
	import Link from "@/components/general/links/base.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import TertiaryHeading from "@/components/general/headings/tertiary.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"

	export let articleMeta: PageMeta

	$: title = defineHeadingInfo({
		"text": articleMeta.title
	})
	$: canonicalURL = `${PUBLIC_PRODUCTION_BASE_URL}${articleMeta.path}`

	const dateTimeFormatOptions: Partial<Intl.DateTimeFormatOptions> = {
		"year": "numeric",
		"month": "long",
		"day": "numeric",
		"hour": "numeric",
		"minute": "numeric",
		"timeZoneName": "short",
		"timeZone": "UTC"
	}

	$: dateTimePublished = articleMeta.datePublished.toISOString()
	$: humanReadableDatePublished = articleMeta.datePublished.toLocaleString(
		"en",
		dateTimeFormatOptions
	)
	$: dateTimeModified = articleMeta.dateModified.toISOString()
	$: humanReadableDateModified = articleMeta.dateModified.toLocaleString(
		"en",
		dateTimeFormatOptions
	)
	$: hasModified = dateTimePublished !== dateTimeModified
</script>

<div
	itemprop="item"
	itemscope
	itemtype="https://schema.org/Article"
	class="card not-prose text-left flex-1 bg-base-200">
	<StructuredSection class={[ "card-body" ]}>
		<TertiaryHeading headingInfo={title} mayUseBookmark={false} class={[ "card-title" ]}/>
		<p itemprop="about text" class="prose">
			{articleMeta.description}
		</p>
		<div class="card-actions flex md:flex-row items-center">
			{#if hasModified}
				<p class="prose text-sm">
					Published last <time
						itemprop="datePublished dateModified"
						datetime={dateTimePublished}>{humanReadableDatePublished}</time>
					then updated last <time
						itemprop="dateModified"
						datetime={dateTimeModified}>{humanReadableDateModified}</time>.
				</p>
			{:else}
				<p class="prose text-sm">
					Published last <time
						itemprop="datePublished dateModified"
						datetime={dateTimePublished}>{humanReadableDatePublished}</time>.
				</p>
			{/if}
			<Link
				address={canonicalURL}
				relationship={internalTypes}
				itemprop="mainEntityOfPage"
				class={[ "btn", "no-underline" ]}>
				<Icon name="navigate_next"/>
			</Link>
		</div>
	</StructuredSection>
</div>
