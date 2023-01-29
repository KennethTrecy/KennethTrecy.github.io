<script lang="ts">
	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/Article">
	<Heading slot="title">{pageMeta.title}</Heading>
	<svelte:fragment slot="content">
		<section itemprop="about" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">Introduction</h2>
			<p itemprop="about">
				Abstraction is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. They take in different levels which this page is all about.
			</p>
			<p itemprop="text">
				Thre are several levels of abstraction listed below. They are ordered from almost specific to most general kind of abstraction.
			</p>
			<ol itemprop="mainEntity">
				<li>Program-level</li>
				<li>Configuration-level</li>
				<li>Variable-level</li>
				<li>Function-level</li>
				<li>Class-level</li>
				<li>Generic-level</li>
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
