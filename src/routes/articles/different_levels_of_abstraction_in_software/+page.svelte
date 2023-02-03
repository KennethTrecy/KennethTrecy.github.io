<script lang="ts">
	import type { HeadingInfo } from "@/types/body"

	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
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
		{ "text": "Interface-level Abstraction" }
	].map(defineHeadingInfo)
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/BlogPosting">
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection
			itemprop="about"
			itemtype="https://schema.org/ItemList"
			id={introduction.id}>
			<SecondaryHeading headingInfo={introduction}/>
			<SimpleText itemprop="about">
				<strong itemprop="keyword">Abstraction</strong> is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. They take in different levels which this page is all about.
			</SimpleText>
			<SimpleText itemprop="mainEntity">
				Thre are <strong itemprop="numberOfItems">{levels.length}</strong> levels of abstraction listed below. They are ordered from easiest to hardest usage and implementation.
			</SimpleText>
			<link itemprop="itemListOrder" href="https://schema.org/ItemListOrderAscending"/>
			<StructuredList order="ascending" hasOwnScope={false} isProjectList={false}>
				{#each levels as level}
					<StructuredListItem>
						<Bookmark
							itemprop="mainEntityOfPage"
							fragment={`#${level.id}`}>
							{level.text}
						</Bookmark>
					</StructuredListItem>
				{/each}
				</StructuredList>
		</StructuredSection>
		<StructuredSection id={levels[0].id}>
			<SecondaryHeading headingInfo={levels[0]}/>
			<SimpleText>
				<strong itemprop="mainEntity">This level of abstraction is the most easiest to work on among other levels.</strong> It can be done by running a simple console application, visiting a web page, installing an executable programs, hosting a HTTP server, or <strong>anything that faces the clients directly</strong>.
			</SimpleText>
			<SimpleText>
				The client could be you, your customer, or other end users. A software at this level are relatively easy to use and modify, unlike the other softwares that are customizable on other levels. They do all the work for you.
			</SimpleText>
			<SimpleText>
				For example, a teacher use a spreadsheet software to calculate the grades of students. The teacher will just input the raw grade and the formula. After that, the final grade will be calculated by the software as programmed.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={levels[1].id}>
			<SecondaryHeading headingInfo={levels[1]}/>
			<SimpleText>
				<strong itemprop="mainEntity">This level of abstraction allows the creation of different package-level softwares.</strong> Softwares at this level can be managed using environment variables (which are declared on the system, <code>.env</code> files, or other contexts) or command line arguments.
			</SimpleText>
			<SimpleText>
				As an example, some programming languages have a compiler. Those compilers allows developer(s) to create programs that run on different operating systems or environments. For every operating system that a developer want to support, the compiler would output a specific executable or artifact specialized and optimized for the targeted system.
			</SimpleText>
			<SimpleText>
				Environment variables are usually used in web development too. Some variables are named like <code>DOMAIN_NAME</code>, <code>SERVER_PORT</code>, or <code>BRAND_NAME</code>. These variables are used different parts of the software and customized per machine.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={levels[2].id}>
			<SecondaryHeading headingInfo={levels[2]}/>
			<SimpleText>
				This is almost similar to environment-level abstraction. However, the environment variables are not included in this level. <strong itemprop="mainEntity">This level refers to the softwares customizable by globally-scope variables and locally-scoped variables.</strong> In other words, they have limited scope depending on their purpose.
			</SimpleText>
			<SimpleText>
				For this level, it requires a user to understand the declaration and definition of variables to modify the program. They may also need to learn about enumerations or any different data types like booleans and integers.
			</SimpleText>
			<SimpleText>
				This level can be seen when making embedded programs for microcontrollers. It is helpful to declare multiple constants like indicating on or off, speed of sound (which can be used for calculating the distance using ultrasonic sensor), or length of intervals. In addition, it can be seen in other fields of Information Technology (<abbr>I.T.</abbr>) such as web development and game development.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={levels[3].id}>
			<SecondaryHeading headingInfo={levels[3]}/>
			<SimpleText>
				<strong itemprop="mainEntity">At this level of abstraction, a software bundles different procedures in one or more functions.</strong> Example of this are libraries which may contain different functions to change the casing of characters in a string.
			</SimpleText>
			<SimpleText>
				Generalizing multiple but similar procedures into one function is helpful during development. It saves lines of code and effort to scroll on a file to understand the operations. Other developers do not need to reimplement a function as they only need to install a dependency containing the process they need, therefore it saves time.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={levels[4].id}>
			<SecondaryHeading headingInfo={levels[4]}/>
			<SimpleText>
				<strong itemprop="mainEntity">These are abstractions that may represent real-world things which may be composed of multiple functionalities.</strong> To have this level of abstraction, a developer need to know about the object-oriented programming (<abbr>OOP</abbr>) concepts like polymorphism or composition.
			</SimpleText>
			<SimpleText>
				When it becomes specialized or concrete, it is known as <strong>instance</strong>.
				Instances are useful in game development. A developer can represent the game's item, obstacles, or any other object to interact with other instances.
			</SimpleText>
			<SimpleText>
				In web development, instances are also used like servers too. Indeed, they have multiple fnctionalities but uses different set of values inside. They may differ in software version, domain name, or files to name a few.
			</SimpleText>
		</StructuredSection>
		<StructuredSection id={levels[5].id}>
			<SecondaryHeading headingInfo={levels[5]}/>
			<SimpleText>
				<strong itemprop="mainEntity">Hardest level of abstraction that someone could work on.</strong> It can be in a form of abstract classes, templates, traits, generics, or macros. Assembly and binary instructions are also included here since they are the most general instructions that represent a computer instructions.
			</SimpleText>
			<SimpleText>
				If a generalized class or function has changed in identifiers, mechanism, or number of parameters, the developer has to change all codes that depend on the generalized class or function. It can be tedious process relative to the number of changes applied on an interface-level code.
			</SimpleText>
			<SimpleText>
				Codes at this level may consider multiple use cases. Modifying them should be careful to make sure the dependent systems do not break, or at least breaks slightly.
			</SimpleText>
		</StructuredSection>
		<!-- TODO: Link some concepts where they can be found -->
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
