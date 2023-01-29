<script lang="ts">
	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/Article">
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<section itemprop="about" itemscope itemtype="https://schema.org/ItemList">
			<h2 itemprop="headline name">Introduction</h2>
			<p itemprop="about">
				Abstraction is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. They take in different levels which this page is all about.
			</p>
			<p itemprop="mainEntity">
				Thre are <span itemprop="numberOfItems">7</span> levels of abstraction listed below. They are ordered
				<span
					itemprop="itemListOrder">from almost specific to most general kind of abstraction</span>.
			</p>
			<ol>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="program-level_abstraction">
						Program-level
					</Bookmark>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="configuration-level_abstraction">
						Configuration-level
					</Bookmark>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="variable-level_abstraction">
						Variable-level
					</Bookmark>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="function-level_abstraction">
						Function-level
					</Bookmark>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="class-level_abstraction">
						Class-level
					</Bookmark>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="ListItem">
					<Bookmark
						itemprop="mainEntityOfPage"
						fragment="generic-level_abstraction">
						Generic-level
					</Bookmark>
				</li>
			<ol>
		</section>
		<section itemprop="hasPart" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">Program-level Abstraction</h2>
			<p itemprop="text">
				<span itemprop="mainEntity">This level of abstraction is the least general among other levels.</span> It can be in a form of simple console application, web page, executable programs, HTTP server, or <em>anything that faces the clients directly</em>.
			</p>
			<p itemprop="text">
				The client could be you, your customer, or other end users. A software at this level are relatively easy to use compare to other softwares at other levels. They do all the work for you.
			</p>
			<p itemprop="text">
				For example, a teacher use a spreadsheet software to calculate the grades of students. You will just input the raw grade and the formula. After that, the final grade will be calculated by the software as programmed.
			</p>
		</section>
		<section itemprop="hasPart" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">Configuration-level Abstraction</h2>
			<p itemprop="text">
				<span itemprop="mainEntity">This level of abstraction allows the creation of different program-level softwares.</span> Softwares at this level can be managed using environment variables or command line arguments.
			</p>
			<p itemprop="text">
				As an example, some programming languages have a compiler or transpiler that allows developer to create programs that run on different operating systems or environments. For every operating system that a developer want to support, the compiler or transpiler would output a specific executable or artifact specialized and optimized for the targeted system.
			</p>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</MainArticle>
