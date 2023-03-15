<script lang="ts">
	import pageMeta from "@/routes/website_info/meta"
	import type { ReferenceInfo, LicenseInfo } from "@/types/reference"
	import { internalTypes, authorTypes } from "@/components/general/links/constants"
	import {
		pageStatusSetID,
		pageStatusSetURL,
		draftStatusID,
		draftStatusURL,
		publishedStatusID,
		publishedStatusURL
	} from "@/constants/schema_collection"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import Citation from "@/components/general/links/citation.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import TertiaryHeading from "@/components/general/headings/tertiary.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import QuaternaryHeading from "@/components/general/headings/quaternary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredReference from "@/components/general/containers/structured_reference.svelte"
	import DescriptiveListItem from "@/components/general/containers/descriptive_list_item.svelte"

	const overview = defineHeadingInfo({
		"prefix": "🌄",
		"text": "Overview"
	})
	const pageGuidelines = defineHeadingInfo({
		"prefix": "📃",
		"text": "Guidelines for Web Pages"
	})
	const pageStatusSet = defineHeadingInfo({
		"prefix": "🔁",
		"text": "List of Page Statuses",
		"id": pageStatusSetID
	})
	const draftStatus = defineHeadingInfo({
		"prefix": "📄",
		"text": "Draft",
		"id": draftStatusID
	})
	const publishedStatus = defineHeadingInfo({
		"prefix": "📰",
		"text": "Published",
		"id": publishedStatusID
	})
	const pageVersionUpdateTriggers = defineHeadingInfo({
		"prefix": "🔼",
		"text": "Update Triggers of Page Version"
	})
	const minorUpdateTriggers = defineHeadingInfo({
		"prefix": "🦐",
		"text": "Minor Update Triggers"
	})
	const majorUpdateTriggers = defineHeadingInfo({
		"prefix": "🦣",
		"text": "Major Update Triggers"
	})
	const pageTimestampNotes = defineHeadingInfo({
		"prefix": "📅",
		"text": "Notes about Timestamps"
	})
	const referencingOthers = defineHeadingInfo({
		"prefix": "👉🏽",
		"text": "Referencing Others"
	})
	const websiteGuidelines = defineHeadingInfo({
		"prefix": "🕸️",
		"text": "Guidelines for the Whole Website"
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
		},
		{
			"title": "Recommended practices for attribution - Creative Commons",
			"itemtype": "https://schema.org/Article",
			"link": "https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution",
			"linkCategory": "outbound",
			"author": {
				"groupName": "CC Wiki",
				"link": "https://wiki.creativecommons.org/wiki/Main_Page"
			},
			"license": {
				"name": "CC BY 4.0",
				"link": "https://creativecommons.org/licenses/by/4.0/"
			}
		},
		{
			"title": "Semantic Versioning 2.0.0",
			"itemtype": "https://schema.org/WebPage",
			"link": "https://semver.org/spec/v2.0.0.html",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Tom",
				"familyName": "Preston-Werner",
				"link": "https://github.com/mojombo/"
			},
			"license": {
				"name": "CC BY 3.0",
				"link": "https://creativecommons.org/licenses/by/3.0/"
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
		<StructuredSection id={pageGuidelines.id}>
			<SecondaryHeading headingInfo={pageGuidelines}/>
			<SimpleText itemprop="mainEntity">
				A page's version increases mathematically. A version that is mathematically highest is considered to be the latest version. This was inspired from mechanism of determining the page version base from <Citation info={references[0]}>a meta tag</Citation>.
			</SimpleText>
			<SimpleText>
				Page version consists of a major version (indicated by whole part), minor version (indicated by the fractional part), and optional suffix to override to a certain status.
			</SimpleText>
			<StructuredSection id={pageStatusSet.id} itemtype="https://schema.org/DefinedTermSet">
				<TertiaryHeading headingInfo={pageStatusSet}/>
				<SimpleText itemprop="description">
					The page version is used to determine the status of the page. The pages alternate between the two statuses below.
				</SimpleText>
				<ul>
					<li itemprop="hasDefinedTerm" itemscope itemtype="https://schema.org/DefinedTerm">
						<span itemprop="termCode name">
							<BaseLink
								address={draftStatusURL}
								relationship={internalTypes}
								itemprop="mainEntityOfPage">
								{draftStatus.text}
							</BaseLink>
						</span>
					</li>
					<li itemprop="hasDefinedTerm" itemscope itemtype="https://schema.org/DefinedTerm">
						<span itemprop="termCode name">
							<BaseLink
								address={publishedStatusURL}
								relationship={internalTypes}
								itemprop="mainEntityOfPage">
								{publishedStatus.text}
							</BaseLink>
						</span>
					</li>
				</ul>
				<StructuredSection id={draftStatusID} itemtype="https://schema.org/DefinedTerm">
					<link itemprop="inDefinedTermSet" href={pageStatusSetURL}>
					<QuaternaryHeading headingInfo={draftStatus} variant="term"/>
					<SimpleText itemprop="description">
						All pages start from <em>0.1-dev</em>. Similar to the <Citation info={references[0]}>meta tag specification for <em>page-version</em></Citation>, any version that is mathematically smaller than one is also considered as draft. Any version with <em>-dev</em> suffix are considered to be in draft and are still being developed.
					</SimpleText>
				</StructuredSection>
				<StructuredSection id={publishedStatusID} itemtype="https://schema.org/DefinedTerm">
					<link itemprop="inDefinedTermSet" href={pageStatusSetURL}>
					<QuaternaryHeading headingInfo={publishedStatus} variant="term"/>
					<SimpleText itemprop="description">
						If a page is in published status, changes for that specific version have been applied. A page may update in the future in case there are changes in topic(s) it discusses, corrections in grammar or spellings, and other kinds of improvements in the content.
					</SimpleText>
				</StructuredSection>
			</StructuredSection>
			<StructuredSection id={pageVersionUpdateTriggers.id} >
				<TertiaryHeading headingInfo={pageVersionUpdateTriggers}/>
				<SimpleText itemprop="description">
					 Page version increases depending on the size and influence of the change. Only text contents or properties inside the main structured data will be considered as changes. Changes in the shell and other components (with generalized text) will be ignored. Below is a non-exhaustive list of possible triggers.
				</SimpleText>
				<StructuredSection id={minorUpdateTriggers.id}>
					<QuaternaryHeading headingInfo={minorUpdateTriggers}/>
					<SimpleText itemprop="description">
						Page version increase by 0.001 for every minor change. Due to this mechanism, a page is allowed to have 1000 minor versions starting from <var>x</var>.000 until <var>x</var>.999 where <var>x</var> is the major version. Below are examples that trigger a minor change.
					</SimpleText>
					<StructuredList order="unordered" variant="normal">
						<DescriptiveListItem>
							Correction in grammar and spellings
						</DescriptiveListItem>
						<DescriptiveListItem>
							Additions of information
						</DescriptiveListItem>
						<DescriptiveListItem>
							Removal of outdated information
						</DescriptiveListItem>
						<DescriptiveListItem>
							Updates of certain package(s) that is part of prerequisite to an article
						</DescriptiveListItem>
					</StructuredList>
				</StructuredSection>
				<StructuredSection id={majorUpdateTriggers.id}>
					<QuaternaryHeading headingInfo={majorUpdateTriggers}/>
					<SimpleText itemprop="description">
						For invoked triggers to do a major update, the page version would be rounded up to the nearest whole number, regardless if there is a minor change included in the new version.
					</SimpleText>
					<StructuredList order="unordered" variant="normal">
						<DescriptiveListItem>
							Change in main data structure type
						</DescriptiveListItem>
						<DescriptiveListItem>
							Change in title, thus affecting URL, and other links.
						</DescriptiveListItem>
					</StructuredList>
				</StructuredSection>
			</StructuredSection>
			<StructuredSection id={pageTimestampNotes.id}>
				<TertiaryHeading headingInfo={pageTimestampNotes}/>
				<SimpleText>
					The date and time of a page, whether to indicate when it was published or modified, may be set up to 15 minutes into the future. The reason is to take account for the bundling time. Should a reader see that one of the dates and/or times is set into the future, the page is also in draft status until the time specified has arrived.
				</SimpleText>
			</StructuredSection>
			<StructuredSection id={referencingOthers.id}>
				<TertiaryHeading headingInfo={referencingOthers}/>
				<SimpleText>
					For the articles, an attribution should given to different individuals and groups of people. The <Citation info={references[1]}>components for attribution</Citation> should be present as much as possible. Texts should be paraphrased as much as possible.
				</SimpleText>
			</StructuredSection>
		</StructuredSection>
		<StructuredSection id={websiteGuidelines.id}>
			<SecondaryHeading headingInfo={websiteGuidelines}/>
			<SimpleText>
				The website follows <Citation info={references[2]}>Semantic Versioning v2.0.0</Citation> because its code could be reused by other developers. A breaking change would happen if there is a change in the required properties of an interface.
			</SimpleText>
		</StructuredSection>
		<StructuredReference/>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
