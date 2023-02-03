<script lang="ts">
	import pageMeta from "@/routes/website_info/meta"
	import { internalTypes, authorTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PrimaryHeader from "@/components/general/headings/primary.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_package_link.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	interface ThirdPartySoftware {
		name: string,
		homepage: string
	}

	interface ThirdPartyPackage extends ThirdPartySoftware {
		licenseName: string,
		licenseLink: string
	}

	const motivation = defineHeadingInfo({
		"prefix": "🚴🏽",
		"text": "The Motivation"
	})
	const bundledDependencies = defineHeadingInfo({
		"prefix": "🧬",
		"text": "Bundled Dependencies"
	})
	const linkedDependencies = defineHeadingInfo({
		"prefix": "🔗",
		"text": "Linked Dependencies"
	})
	const deployment = defineHeadingInfo({
		"prefix": "↗️",
		"text": "Deployment"
	})
	const concerns = defineHeadingInfo({
		"prefix": "✋🏽",
		"text": "Do you have concerns?"
	})

	const compiledThirdPartyPackages: ThirdPartyPackage[] = [
		{
			"name": "Svelte",
			"homepage": "https://svelte.dev/",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/sveltejs/svelte/blob/master/LICENSE.md"
		}, {
			"name": "Tailwind CSS",
			"homepage": "https://tailwindcss.com/",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
		}, {
			"name": "@tailwindcss/typography",
			"homepage": "https://github.com/tailwindlabs/tailwindcss-typography#readme",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/tailwindlabs/tailwindcss-typography/blob/master/LICENSE"
		}, {
			"name": "daisyUI",
			"homepage": "https://daisyui.com/",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/saadeghi/daisyui/blob/master/LICENSE"
		}, {
			"name": "rgb-hex",
			"homepage": "https://github.com/sindresorhus/rgb-hex#readme",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/sindresorhus/rgb-hex/blob/main/license"
		}, {
			"name": "theme-change",
			"homepage": "https://github.com/saadeghi/theme-change#readme",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/saadeghi/theme-change/blob/master/LICENSE"
		}
	]
	const linkedThirdPartyPackages: ThirdPartyPackage[] = [
		{
			"name": "Roboto",
			"homepage": "https://fonts.google.com/specimen/Roboto",
			"licenseName": "Apache License, Version 2.0",
			"licenseLink": "https://www.apache.org/licenses/LICENSE-2.0"
		}, {
			"name": "Material Symbols",
			"homepage": "https://fonts.google.com/icons",
			"licenseName": "Apache License, Version 2.0",
			"licenseLink": "https://www.apache.org/licenses/LICENSE-2.0"
		}, {
			"name": "Simple Icons",
			"homepage": "https://simpleicons.org/",
			"licenseName": "Creative Commons Zero v1.0 Universal",
			"licenseLink": "https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md"
		}
	]
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/Website">
	<PrimaryHeader slot="title">{pageMeta.title}</PrimaryHeader>
	<svelte:fragment slot="content">
		<StructuredSection itemtype="https://schema.org/WebContent" id={motivation.id}>
			<SecondaryHeading headingInfo={motivation}/>
			<SimpleText itemprop="mainEntity">
				The purpose of this website is to showcase my projects that I have built. The website itself is also project where I can apply my different skills. It also contains valuable information to connect me and my future employers.
			</SimpleText>
		</StructuredSection>
		<StructuredSection itemtype="https://schema.org/ItemList" id={bundledDependencies.id}>
			<SecondaryHeading headingInfo={bundledDependencies}/>
			<SimpleText itemprop="about">
				The website uses several open-source projects. Some dependencies (which are included during bundling) have been mentioned below.
			</SimpleText>
			<StructuredList order="unordered" isProjectList={false} hasOwnScope={false}>
				{#each compiledThirdPartyPackages as thirdPartyPackage}
					<StructuredListItem itemtype="https://schema.org/SoftwareApplication">
						<ThirdPartyLink
							packageName={thirdPartyPackage.name}
							homeLink={thirdPartyPackage.homepage}
							licenseName={thirdPartyPackage.licenseName}
							licenseLink={thirdPartyPackage.licenseLink}/>
					</StructuredListItem>
				{/each}
			</StructuredList>
		</StructuredSection>
		<StructuredSection itemtype="https://schema.org/ItemList" id={linkedDependencies.id}>
			<SecondaryHeading headingInfo={linkedDependencies}/>
			<SimpleText itemprop="about">
				Meanwhile, some dependencies have been used in the website by using <code>&lt;link&gt;</code> tags or through <code>src</code> attribute of <code>&lt;img&gt;</code> tags. They are included in the rendering process of a user's browser to enhance appearance.
			</SimpleText>
			<StructuredList order="unordered" isProjectList={false} hasOwnScope={false}>
				{#each linkedThirdPartyPackages as thirdPartyPackage}
					<StructuredListItem itemtype="https://schema.org/SoftwareApplication">
						<ThirdPartyLink
							packageName={thirdPartyPackage.name}
							homeLink={thirdPartyPackage.homepage}
							licenseName={thirdPartyPackage.licenseName}
							licenseLink={thirdPartyPackage.licenseLink}/>
					</StructuredListItem>
				{/each}
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={deployment.id}>
			<SecondaryHeading headingInfo={deployment}/>
			<SimpleText itemprop="mainEntity">
				To build the website, <ThirdPartyLink
					packageName="SvelteKit"
					homeLink="https://kit.svelte.dev/"
					licenseName="MIT"
					licenseLink="https://github.com/sveltejs/kit/blob/master/LICENSE"/>
				has been used to bundle necessary resources for each web page.
				The bundling happens in
				<ExternalLink address="https://developers.cloudflare.com/pages/">
					Cloudflare Pages
				</ExternalLink> then, the bundled resources will be deployed globally.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={concerns.id}>
			<SecondaryHeading headingInfo={concerns}/>
			<SimpleText itemprop="mainEntity">
				Should there be concerns in the contents of my web pages, please do not hesitate to <BaseLink
				itemprop="mainEntityOfPage"
				address="/about_myself"
				relationship={[ ...internalTypes, ...authorTypes ]}
				context="self">contact me</BaseLink> on one of my communication channels. You can also send offers. You can also ask for technical help if you are a beginner.
			</SimpleText>
		</StructuredSection>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
