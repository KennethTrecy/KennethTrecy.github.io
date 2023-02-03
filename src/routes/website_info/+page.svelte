<script lang="ts">
	import pageMeta from "@/routes/website_info/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import PrimaryHeader from "@/components/general/headings/primary.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_package_link.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import StructuredUnorderedList
		from "@/components/general/containers/structured_unordered_list.svelte"

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
		"prefix": "🧬",
		"text": "Dependencies"
	})
	const thirdPartyPackages: ThirdPartyPackage[] = [
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
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/Website">
	<PrimaryHeader slot="title">{pageMeta.title}</PrimaryHeader>
	<svelte:fragment slot="content">
		<section itemprop="hasPart" itemscope itemtype="https://schema.org/WebContent">
			<SecondaryHeading headingInfo={motivation}/>
			<SimpleText itemprop="mainEntity">
				The purpose of this website is to showcase my projects that I have built. The website itself is also project where I can apply my different skills. It also contains valuable information to connect me and my future employers.
			</SimpleText>
		</section>
		<section itemprop="mentions" itemscope itemtype="https://schema.org/ItemList">
			<SecondaryHeading headingInfo={dependencies}/>
			<SimpleText itemprop="about">
				The website uses several open-source projects. Some dependencies which are included during compilation have been mentioned below.
			</SimpleText>
			<StructuredUnorderedList itemprop="mainEntity" isProjectList={false}>
				{#each thirdPartyPackages as thirdPartyPackage}
					<StructuredListItem itemtype="https://schema.org/SoftwareApplication">
						<ThirdPartyLink
							packageName={thirdPartyPackage.name}
							homeLink={thirdPartyPackage.homepage}
							licenseName={thirdPartyPackage.licenseName}
							licenseLink={thirdPartyPackage.licenseLink}/>
					</StructuredListItem>
				{/each}
			</StructuredUnorderedList>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
