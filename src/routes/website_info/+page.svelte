<script lang="ts">
	import pageMeta from "@/routes/about/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import ContactLink from "@/components/about/contact_link.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PrimaryHeader from "@/components/general/headings/primary.svelte"
	import SecondaryHeader from "@/components/general/headings/secondary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"

	interface ThirdPartySoftware {
		name: string,
		homepage: string
	}

	interface ThirdPartyPackage extends ThirdPartySoftware {
		license: string,
		licenseLink: string
	}

	const thirdPartyPackages: ThirdPartyPackage[] = [

	]
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/Website">
	<PrimaryHeader slot="title">Who am I?</PrimaryHeader>
	<svelte:fragment slot="content">
		<section itemprop="hasPart" itemscope itemtype="https://schema.org/WebContent">
			<SecondaryHeader id=""></SecondaryHeader>
			<p itemprop="mainEntity">

			</p>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</MainArticle>
