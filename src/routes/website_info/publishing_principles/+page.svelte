<script lang="ts">
	import pageMeta from "@/routes/website_info/meta"
	import type { ReferenceInfo, LicenseInfo } from "@/types/reference"
	import { internalTypes, authorTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import Citation from "@/components/general/links/citation.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import TertiaryHeading from "@/components/general/headings/tertiary.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_package_link.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import StructuredReference from "@/components/general/containers/structured_reference.svelte"

	const overview = defineHeadingInfo({
		"prefix": "🌄",
		"text": "Overview"
	})
	const pageVersioning = defineHeadingInfo({
		"prefix": "📃",
		"text": "Web Pages' Versioning Guidelines"
	})

	const references: ReferenceInfo[] = [
		{
			"title": "Specification For HTML Meta Element with Name Value Page-Version -- BrittleBit.org",
			"itemtype": "https://schema.org/TechArticle",
			"link": "http://brittlebit.org/specifications/html-meta-page-version/specification-for-html-meta-element-with-name-value-page-version.html",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Nick",
				"familyName": "Levinson",
				"link": "http://brittlebit.org/about-the-author-and-contact.html"
			},
			"license": {
				"name": "CC0",
				"link": "https://creativecommons.org/publicdomain/zero/1.0/"
			}
		}
	]
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/Website">
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection id={overview.id}>
			<SecondaryHeading headingInfo={overview}/>
			<SimpleText itemprop="description">
				The website administrator will release a new or modified page. Each page are versioned and timestamped. This is important especially for the pages that update due to new set of dependencies, new standards, or changes in the industry. The website itself also has a version which can be seen on its release page. Below are set of guidelines on versioning of the contents.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={pageVersioning.id}>
			<SecondaryHeading headingInfo={pageVersioning}/>
			<SimpleText itemprop="mainEntity">
				A page's version increases mathematically. A version that is mathematically highest is considered to be the latest version. This was inspired from mechanism of determining the page version base from <Citation info={references[0]}>a meta tag</Citation>.
			</SimpleText>
			<SimpleText>
				All pages start from <em>0.1-dev</em>. Similar to the <Citation info={references[0]}>meta tag specification for <em>page-version</em></Citation>, any version that is mathematically smaller than one is also considered as draft. Any version with <em>-dev</em> suffix are considered to be in draft and still being developed.
			</SimpleText>
			<SimpleText>
				Published pages increase by 0.001 for every minor change. For major changes on them, the version will be rounded up to the nearest whole number. Only text contents or properties inside the main structured data will be considered as changes. Changes in the shell will be ignored.
			</SimpleText>
		</StructuredSection>
		<StructuredReference/>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
