<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"
	import type { HeadingInfo } from "@/types/container_info"

	import pageMeta from "@/routes/articles/installation_guide_for_fragmented_web_servers/meta"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Citation from "@/components/general/links/citation.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import BodyGroup from "@/components/general/containers/body_group.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import SimpleThing from "@/components/general/containers/simple_thing.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const problem = defineHeadingInfo({ "text": "Problem" })
	const prerequisites = defineHeadingInfo({ "text": "Prerequisites" })
	const steps: HeadingInfo<"defined">[] = [
		{ "text": "HTTP Server Installation" },
		{ "text": "Server Language Installation" },
		{ "text": "Database Installation" }
	].map(defineHeadingInfo)
	const experienceAndPartingWords = defineHeadingInfo({ "text": "Experiences and Parting Word" })

	const references: ReferenceInfo[] = [

	]
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={problem.id}>
		<SecondaryHeading headingInfo={problem}/>
		<SimpleText itemprop="description">
			Some web developers may have used an all-in-one server during their first years in web development. The all-in-one server may have a database server and HTTP server with an integrated interpreter (usually to read server-side PHP scripts). However, bundled servers are not always good for scalability purposes.
		</SimpleText>
		<SimpleText itemprop="mainEntity">

		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content={`${steps.length}`}>
			{#each steps as step}
				<StructuredListItem>
					<SimpleThing itemprop="name">
						<Bookmark
							itemprop="mainEntityOfPage"
							fragment={`#${step.id}`}>
							{step.text}
						</Bookmark>
					</SimpleThing>
				</StructuredListItem>
			{/each}
		</StructuredList>
	</StructuredSection>
	<StructuredSection itemtype="https://schema.org/TechArticle" id={prerequisites.id}>
		<link itemprop="mainEntityOfPage" href={`#${pageMeta.pageURL}`}/>
		<SecondaryHeading headingInfo={prerequisites}/>
		<SimpleText>
		</SimpleText>
		<SimpleText itemprop="dependencies">
		</SimpleText>
	</StructuredSection>
	<BodyGroup>
		<StructuredSection id={steps[0].id}>
			<SecondaryHeading headingInfo={steps[0]}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
		<StructuredSection id={steps[1].id}>
			<SecondaryHeading headingInfo={steps[1]}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
		<StructuredSection id={steps[2].id}>
			<SecondaryHeading headingInfo={steps[2]}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
		<StructuredSection id={experienceAndPartingWords.id}>
			<SecondaryHeading headingInfo={experienceAndPartingWords}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
	</BodyGroup>
</ArticlePost>
