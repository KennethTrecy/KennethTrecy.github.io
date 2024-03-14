<script lang="ts">
	import pageMeta from "@/routes/website_info/meta"
	import { authorTypes, internalTypes } from "@/components/general/links/constants"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
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
	const dependencies = defineHeadingInfo({
		"prefix": "📦",
		"text": "Dependencies"
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
	const publicationPrinciples = defineHeadingInfo({
		"prefix": "🧾",
		"text": "Publication Principles"
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
		}, {
			"name": "@octokit/core",
			"homepage": "https://github.com/octokit/core.js#readme",
			"licenseName": "MIT",
			"licenseLink": "https://github.com/octokit/core.js/blob/main/LICENSE"
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
			"name": "Noto Color Emoji",
			"homepage": "https://fonts.google.com/noto/specimen/Noto+Color+Emoji/about",
			"licenseName": "Open Font License",
			"licenseLink": "https://scripts.sil.org/OFL"
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
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection itemtype="https://schema.org/WebContent" id={motivation.id}>
			<SecondaryHeading headingInfo={motivation}/>
			<SimpleText itemprop="mainEntity">
				The purpose of this website is to showcase my projects that I have built. The website itself is also a project where I can apply my different skills. It also contains valuable information to connect me and my future employers.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={dependencies.id}>
			<SecondaryHeading headingInfo={dependencies}/>
			<SimpleText itemprop="description">
				The website uses several open-source projects and third-party services to build and host it. They may be linked in the final output. Some are included in the bundling process. Some make up the deployment process.
			</SimpleText>
			<StructuredSection id={bundledDependencies.id}>
				<TertiaryHeading headingInfo={bundledDependencies}/>
				<SimpleText itemprop="description">
					 Some dependencies which are included during bundling have been mentioned below. These dependencies have significant impact on source code of this website.
				</SimpleText>
				<StructuredList order="unordered">
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
			<StructuredSection id={linkedDependencies.id}>
				<TertiaryHeading headingInfo={linkedDependencies}/>
				<SimpleText itemprop="description">
					Meanwhile, some dependencies have been used on the website by using <code>&lt;link&gt;</code> tags or through <code>src</code> attribute of <code>&lt;img&gt;</code> tags. They are included in the rendering process of a user's browser to enhance appearance.
				</SimpleText>
				<StructuredList order="unordered">
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
				<TertiaryHeading headingInfo={deployment}/>
				<SimpleText itemprop="mainEntity">
					To build the website, <ThirdPartyLink
						packageName="SvelteKit"
						homeLink="https://kit.svelte.dev/"
						licenseName="MIT"
						licenseLink="https://github.com/sveltejs/kit/blob/master/LICENSE"/>
					has been used to bundle necessary resources for each web page.
					The bundling happens in a JAMstack platform named
					<ExternalLink address="https://pages.cloudflare.com/">
						Cloudflare Pages
					</ExternalLink> then, the bundled resources will be deployed globally.
				</SimpleText>
			</StructuredSection>
		</StructuredSection>
		<StructuredSection id={publicationPrinciples.id}>
			<SecondaryHeading headingInfo={publicationPrinciples}/>
			<SimpleText itemprop="mainEntity">
				Before deploying the new and modified web pages, there is <BaseLink
					itemprop="mainEntityOfPage"
					address="/website_info/publishing_principles"
					relationship={internalTypes}
					context="self">a set of principles</BaseLink> being used. They are recommended to be followed but not required. They serve as guide to ensure the quality and consistency of the pages.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={concerns.id}>
			<SecondaryHeading headingInfo={concerns}/>
			<SimpleText itemprop="mainEntity">
				Should there be concerns in the contents of my web pages, please do not hesitate to <BaseLink
					itemprop="mainEntityOfPage"
					address="/about_myself#contacts"
					relationship={[ ...internalTypes, ...authorTypes ]}
					context="self">contact me</BaseLink> on one of my communication channels. You can also send offers. You can also ask for technical help if you are a beginner.
			</SimpleText>
		</StructuredSection>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
