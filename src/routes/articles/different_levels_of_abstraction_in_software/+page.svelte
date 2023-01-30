<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const introduction = defineHeadingInfo({ "text": "Introduction" })
	const levels: HeadingInfo<"defined">[] = [
		{ "text": "Package-level Abstraction" },
		{ "text": "Configuration-level Abstraction" },
		{ "text": "Variable-level Abstraction" },
		{ "text": "Function-level Abstraction" },
		{ "text": "Class-level Abstraction" },
		{ "text": "Generic-level Abstraction" }
	].map(defineHeadingInfo)
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/Article">
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection
			itemprop="about"
			itemtype="https://schema.org/ItemList"
			id={introduction.id}>
			<SecondaryHeading headingInfo={introduction}/>
			<p itemprop="about">
				<strong itemprop="keyword">Abstraction</strong> is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. They take in different levels which this page is all about.
			</p>
			<p itemprop="mainEntity">
				Thre are <strong itemprop="numberOfItems">7</strong> levels of abstraction listed below. They are ordered from easiest to hardest usage and implementation.
			</p>
			<link itemprop="itemListOrder" href="https://schema.org/ItemListOrderAscending"/>
			<ol>
				{#each levels as level}
					<StructuredListItem>
						<Bookmark
							itemprop="mainEntityOfPage"
							fragment={`#${level.id}`}>
							{level.text}
						</Bookmark>
					</StructuredListItem>
				{/each}
			<ol>
		</StructuredSection>
		<StructuredSection id={levels[0].id}>
			<SecondaryHeading headingInfo={levels[0]}/>
			<p itemprop="text">
				<strong itemprop="mainEntity">This level of abstraction is the most easiest to work on among other levels.</strong> It can be done by running a simple console application, visiting a web page, installing an executable programs, hosting a HTTP server, or <strong>anything that faces the clients directly</strong>.
			</p>
			<p itemprop="text">
				The client could be you, your customer, or other end users. A software at this level are relatively easy to use and modify, unlike the other softwares that are customizable on other levels. They do all the work for you.
			</p>
			<p itemprop="text">
				For example, a teacher use a spreadsheet software to calculate the grades of students. The teacher will just input the raw grade and the formula. After that, the final grade will be calculated by the software as programmed.
			</p>
		</StructuredSection>
		<StructuredSection id={levels[1].id}>
			<SecondaryHeading headingInfo={levels[1]}/>
			<p itemprop="text">
				<strong itemprop="mainEntity">This level of abstraction allows the creation of different package-level softwares.</strong> Softwares at this level can be managed using environment variables or command line arguments.
			</p>
			<p itemprop="text">
				As an example, some programming languages have a compiler or transpiler that allows developer to create programs that run on different operating systems or environments. For every operating system that a developer want to support, the compiler or transpiler would output a specific executable or artifact specialized and optimized for the targeted system.
			</p>
		</StructuredSection>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
