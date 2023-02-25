<script lang="ts">
	import { onMount } from "svelte"
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

	import type { ReferenceInfo } from "@/types/reference"
	import type { ExecutedCommandSetInfo, HeadingInfo } from "@/types/container_info"
	import type {
		PageData
	} from "@/routes/articles/different_levels_of_abstraction_in_programming/$types"

	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_programming/meta"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import CommonHead from "@/components/general/common_head.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Citation from "@/components/general/links/citation.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ExampleCode from "@/components/general/containers/example_code.svelte"
	import ExampleOutput from "@/components/general/containers/example_output.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import StructuredReference from "@/components/general/containers/structured_reference.svelte"

	const loadedFileInfos = derived(page, resolvedPage => resolvedPage.data.loadedFileInfos ?? [])

	const introduction = defineHeadingInfo({ "text": "Introduction" })
	const levels: HeadingInfo<"defined">[] = [
		{ "text": "Package-level Abstraction" },
		{ "text": "Configuration-level Abstraction" },
		{ "text": "Variable-level Abstraction" },
		{ "text": "Function-level Abstraction" },
		{ "text": "Object-level Abstraction" },
		{ "text": "Interface-level Abstraction" }
	].map(defineHeadingInfo)
	const conclusion = defineHeadingInfo({ "text": "Conclusion" })

	const packageLevelExecutedCommandInfo = derived(loadedFileInfos, resolvedFiles => ({
		"description": "This is the output after running the package-level code.",
		"commands": [
			{
				"command": `npx ts-node ${resolvedFiles[0]?.path ?? ""}`,
				"output": [
					{ "text": "What is your first name? Kenneth" },
					{ "text": "What is your last name? Tobias" },
					{ "text": "What is your age? 10" },
					{ "text": "How many meters did you walk? 100" },
					{ "text": "You are Kenneth Tobias." },
					{ "text": "Your age is 10 and you have walked for 100 meters.\n" }
				]
			}
		]
	} as ExecutedCommandSetInfo))
	const environmentLevelExecutedCommandInfo = derived(loadedFileInfos, resolvedFiles => ({
		"description": "This is the output after running the configuration-level code. Notice that the questions for first name and last name have changed according to the questions in environment file.",
		"commands": [
			{
				"command": `npx ts-node ${resolvedFiles[1]?.path ?? ""}`,
				"output": [
					{ "text": "Enter your first name:Kenneth" },
					{ "text": "Enter your last name:Tobias" },
					{ "text": "What is your age? 10" },
					{ "text": "How many meters did you walk? 100" },
					{ "text": "You are Kenneth Tobias." },
					{ "text": "Your age is 10 and you have walked for 100 meters.\n" }
				]
			}
		]
	} as ExecutedCommandSetInfo))

	const references: ReferenceInfo[] = [
		{
			"title": "dotenv",
			"link": "github.com/motdotla/dotenv#readme",
			"itemtype": "https://schema.org/SoftwareSourceCode",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Scott",
				"familyName": "Motte",
				"link": "https://github.com/motdotla"
			},
			"license": {
				"name": "BSD-2-Clause",
				"link": "https://github.com/motdotla/dotenv/blob/master/LICENSE"
			}
		}, {
			"title": "Arduino Tutorial 4: Understanding Arduino Variables",
			"link": "https://www.youtube.com/watch?v=nPOKOi1jIK0",
			"itemtype": "https://schema.org/SoftwareSourceCode",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Paul",
				"familyName": "McWhorter",
				"link": "https://www.patreon.com/PaulMcWhorter"
			}
		}, {
			"title": "PHP: Class Abstraction - Manual",
			"link": "https://www.php.net/manual/en/language.oop5.abstract.php",
			"itemtype": "https://schema.org/CreativeWork",
			"linkCategory": "outbound",
			"author": {
				"groupName": "PHP Documentation Group",
				"link": "https://www.php.net/manual/en/preface.php#contributors"
			},
			"license": {
				"name": "CC BY 3.0",
				"link": "https://www.php.net/manual/en/cc.license.php"
			}
		}, {
			"title": "Templates - cppreference.com",
			"link": "https://en.cppreference.com/w/cpp/language/templates",
			"itemtype": "https://schema.org/CreativeWork",
			"linkCategory": "outbound",
			"author": {
				// The group name was based on question "Who is behind this site?" in FAQs.
				// See: https://en.cppreference.com/w/Cppreference:FAQ
				"groupName": "C++ enthusiasts worldwide",
				"link": "https://en.cppreference.com/mwiki/index.php?title=cpp/language/templates&action=history"
			},
			"license": [
				{
					"name": "CC BY-SA 3.0",
					"link": "https://en.cppreference.com/w/Cppreference:Copyright/CC-BY-SA"
				}, {
					"name": "GDFL",
					"link": "https://en.cppreference.com/w/Cppreference:Copyright/GDFL"
				}
			]
		}, {
			"title": "Traits: Defining Shared Behavior - The Rust Programming Language",
			"link": "https://doc.rust-lang.org/book/ch10-02-traits.html",
			"itemtype": "https://schema.org/CreativeWork",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Rust Project Developers",
				"link": "https://github.com/rust-lang/book/graphs/contributors"
			},
			"license": [
				{
					"name": "MIT",
					"link": "https://github.com/rust-lang/book/blob/main/LICENSE-MIT"
				}, {
					"name": "Apache License, Version 2.0",
					"link": "https://github.com/rust-lang/book/blob/main/LICENSE-APACHE"
				}
			]
		}, {
			"title": "TypeScript: Documentation - Generics",
			"link": "https://www.typescriptlang.org/docs/handbook/2/generics.html",
			"itemtype": "https://schema.org/CreativeWork",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Microsoft Corporation",
				"link": "https://www.microsoft.com"
			},
			"license": {
				"name": "CC BY 4.0",
				"link": "https://github.com/microsoft/TypeScript-Website/blob/v2/LICENSE"
			}
		}, {
			"title": "Macros - The Rust Reference",
			"link": "https://doc.rust-lang.org/reference/macros.html",
			"itemtype": "https://schema.org/CreativeWork",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Rust Project Developers",
				"link": "https://github.com/rust-lang/reference/graphs/contributors"
			},
			"license": [
				{
					"name": "MIT",
					"link": "https://github.com/rust-lang/reference/blob/master/LICENSE-MIT"
				}, {
					"name": "Apache License, Version 2.0",
					"link": "https://github.com/rust-lang/reference/blob/master/LICENSE-APACHE"
				}
			]
		}
	]
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="description">
			<Keyword>Abstraction</Keyword> is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In programming, abstractions are used to simplify the process which are common to other tasks. In other words, they are <Keyword>reusable</Keyword>. They take in different levels which this page is all about.
		</SimpleText>
		<SimpleText itemprop="mainEntity">
			There are {levels.length} levels of abstraction listed below. They are ordered from easiest to hardest in implementation and customizability.
		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content={levels.length}>
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
		<SimpleText itemprop="description">
			<strong itemprop="mainEntity">This level of abstraction is the easiest to work on among other levels.</strong> However, a code at this level may have repetitive statements. Therefore, the program will be longer and will take time to read.
		</SimpleText>
		<SimpleText>
			In addition, most software are only usable in this level. They are relatively easy to install as they can be standalone, in compressed portable format, or included with the help of package manager. The downside is that there is a <Keyword>limited customizability</Keyword> which are usually offered through <em>settings</em> or <em>preferences</em> option. It is expected that the users of these applications are anyone who have <Keyword>basic computer literacy</Keyword>.
		</SimpleText>
		<SimpleText>
			For example, a teacher use a spreadsheet software to calculate the grades of students. The teacher will just input the raw grade and the formula. After that, the final grade will be automatically calculated by the software as programmed.
		</SimpleText>
		<SimpleText>
			Below is another example of a program which asks for user's first name, last name, age, and distance walked. Notice that there are repetitive statements and may take time to read.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[0]}>
			<ExampleOutput
				commandInfos={$packageLevelExecutedCommandInfo}
				codeInfo={$loadedFileInfos[0]}/>
		</ExampleCode>
	</StructuredSection>
	<StructuredSection id={levels[1].id}>
		<SecondaryHeading headingInfo={levels[1]}/>
		<SimpleText itemprop="description">
			<strong itemprop="mainEntity">This level of abstraction allows the creation of different package-level software programs.</strong> Software programs at this level can be managed using environment variables (which are declared on the system, <code>.env</code> files, or other contexts) or command line arguments. Users who want to customize their software should know how to <Keyword>run</Keyword> or <Keyword>compile</Keyword> software.
		</SimpleText>
		<SimpleText>
			For instance, some programming languages have a compiler. Those compilers allow developer(s) to create programs that run on different operating systems or environments. For every operating system that a developer want to support, the compiler would output a specific executable or artifact specialized and optimized for the targeted system.
		</SimpleText>
		<SimpleText>
			Environment variables are usually used in web development too. Some variables are named like <code>DOMAIN_NAME</code>, <code>SERVER_PORT</code>, or <code>BRAND_NAME</code>. These variables are used different parts of the software and customized per machine.
		</SimpleText>
		<SimpleText>
			Using the <Bookmark fragment={`#${levels[0].id}`}>{
				levels[0].text.toLocaleLowerCase()
			}'s example</Bookmark>, the program can be modified to allow configuration-level customization. It uses an external package named <Citation info={references[0]}>dotenv</Citation> package to use the environment variables by using <code>process<span>.</span>env.&lt;variable name&gt;</code>. Note that the program uses logical OR operator (<code>||</code>) in order to use default messages.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[1]}>
			<SimpleText>
				There are different methods to declare environment variables. Below, it is an example of <code>.env</code> file to declare them. Note that some of the variables in the environment do not have a declared value. Therefore, the program will use default values for those empty variables.
			</SimpleText>
			<ExampleCode itemprop="hasPart" codeInfo={$loadedFileInfos[2]}/>
			<ExampleOutput
				commandInfos={$environmentLevelExecutedCommandInfo}
				codeInfo={$loadedFileInfos[1]}/>
		</ExampleCode>
	</StructuredSection>
	<StructuredSection id={levels[2].id}>
		<SecondaryHeading headingInfo={levels[2]}/>
		<SimpleText itemprop="description">
			This is almost similar to <Bookmark fragment={`#${levels[1].id}`}>{
				levels[1].text.toLocaleLowerCase()
			}</Bookmark>. However, the environment variables are not included in this level. <strong itemprop="mainEntity">This level refers to the programs/codes customizable by globally-scoped variables and locally-scoped variables.</strong>
		</SimpleText>
		<SimpleText>
			Should the user want to customize the program, knowledge in <Keyword>variable declaration</Keyword> (depending on the programming language used) is a must. They may also need to learn about enumerations or any different data types like boolean and integer.
		</SimpleText>
		<SimpleText>
			This level can be seen when making embedded programs for microcontrollers. It is helpful to declare multiple constants for values that are repeatedly used like indicating on or off, <Citation info={references[1]}>pin to the <abbr>LED</abbr>, or length of intervals</Citation>. In addition, it can be seen in other fields of Information Technology (<abbr>I.T.</abbr>) such as web development and game development.
		</SimpleText>
		<SimpleText>
			Building from the <Bookmark fragment={`#${levels[1].id}`}>example in {
				levels[1].text.toLocaleLowerCase()
			}</Bookmark>, default messages can be put in global scope allowing other developers find the default messages quickly.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[3]}/>
	</StructuredSection>
	<StructuredSection id={levels[3].id}>
		<SecondaryHeading headingInfo={levels[3]}/>
		<SimpleText itemprop="description">
			<strong itemprop="mainEntity">At this level of abstraction, a software/code file bundles different procedures in one or more functions.</strong> Example of this are libraries which may contain different functions to change the casing of characters in a string.
		</SimpleText>
		<SimpleText>
			Generalizing multiple, yet similar procedures into one function is helpful during development. It saves lines of code and effort to scroll on a file to understand the operations. Other developers do not need to reimplement a function as they only need to install a dependency containing the process they need, therefore it saves time.
		</SimpleText>
		<SimpleText>
			Reusing the <Bookmark fragment={`#${levels[2].id}`}>{
				levels[2].text.toLocaleLowerCase()
			}'s example</Bookmark>, repeated statements on reading a string can be summarized into one function. Therefore, it is quicker to read.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[4]}/>
		<SimpleText>
			Repeated statements on reading an integer can also be summarized.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[5]}/>
		<SimpleText>
			There are similarities between the two new functions. Generalizing it further, it becomes something like below.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[6]}/>
	</StructuredSection>
	<StructuredSection id={levels[4].id}>
		<SecondaryHeading headingInfo={levels[4]}/>
		<SimpleText itemprop="description">
			<strong itemprop="mainEntity">These are abstractions that may represent real-world things which may be composed of multiple functionalities.</strong> To have this level of abstraction, a developer needs to know about the object-oriented programming (<abbr>OOP</abbr>) concepts like polymorphism or composition.
		</SimpleText>
		<SimpleText>
			When it becomes specialized or concrete, it is known as <strong>instance</strong>.
			Instances are useful in game development. A developer can use an instance represent the game's item, obstacles, or any other object to interact with other instances.
		</SimpleText>
		<SimpleText>
			In web development, instances are also used like servers too. Indeed, they have multiple functionalities but uses different set of values inside. They may differ in software version, domain name, or files to name a few.
		</SimpleText>
		<SimpleText>
			Below is an improved version of the <Bookmark fragment={`#${levels[3].id}`}>{
				levels[3].text.toLocaleLowerCase()
			}'s last example</Bookmark>. It uses classes and the concept of inheritance to reuse the code. There are four instances in this code which are contained in variables declared at line 47, 50, 53, and 56.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[7]}/>
	</StructuredSection>
	<StructuredSection id={levels[5].id}>
		<SecondaryHeading headingInfo={levels[5]}/>
		<SimpleText itemprop="description">
			<strong itemprop="mainEntity">Hardest level of abstraction that someone could work on.</strong> It can be in a form of <Citation info={references[2]}>abstract classes</Citation>, <Citation info={references[3]}>templates</Citation>, <Citation info={references[4]}>traits</Citation>, <Citation info={references[5]}>generics</Citation>, or <Citation info={references[6]}>macros</Citation>.
		</SimpleText>
		<SimpleText>
			If a generalized class or function has changed in identifiers, mechanism, or number of parameters, the developer has to change all codes that depend on the generalized class or function. It can be tedious process as the difficulty is relative to the number of changes applied on an interface-level code.
		</SimpleText>
		<SimpleText>
			Codes at this level may consider multiple use cases. Modifying them should be careful to make sure the dependent systems do not break, or at least breaks slightly.
		</SimpleText>
		<SimpleText>
			Below, is an example based from <Bookmark fragment={`#${levels[4].id}`}>{
				levels[4].text.toLocaleLowerCase()
			}'s example</Bookmark> but with the application of <Citation info={references[5]}>Typescript's generics</Citation>.
			The code may appear longer than the example in <Bookmark fragment={`#${levels[0].id}`}>{
				levels[0].text.toLocaleLowerCase()
			}</Bookmark>. However, making an interface-level abstraction has greater benefits on large projects than this example.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[8]}/>
		<SimpleText>
			In addition, an example based from <Bookmark fragment={`#${levels[3].id}`}>{
				levels[3].text.toLocaleLowerCase()
			}'s example</Bookmark> but with the application of <Citation info={references[5]}>Typescript's generics</Citation> too. It appears to be shorter than the code above.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[9]}/>
	</StructuredSection>
	<StructuredSection id={conclusion.id}>
		<SecondaryHeading headingInfo={conclusion}/>
		<SimpleText itemprop="description">
			Those are the various levels of abstraction that programmers may find on every software they build. Beginners may want to make their programs customizable by aiming for a <Bookmark fragment={`#${levels[0].id}`}>package-level</Bookmark> to <Bookmark fragment={`#${levels[2].id}`}>variable-level</Bookmark> abstraction. Thus, being overwhelmed can be prevented and focus at the current task.
		</SimpleText>
		<SimpleText>
			Meanwhile, developers of a large project or proficient programmers may want to transform their code aiming for a
			<Bookmark fragment={`#${levels[3].id}`}>function-level</Bookmark>
			to <Bookmark fragment={`#${levels[5].id}`}>interface-level</Bookmark> abstraction to save time configuring the similar behaviors. Another benefit is that there is a consistency between the different components, mechanisms, or interfaces of the application. Yet, the price is that the other contributors need to know advance concepts to understand the advanced abstractions.
		</SimpleText>
		<SimpleText>
			That said, the levels in this article allows programmers determine the complexity of a code. They are just one of the tools in order to communicate with other developers efficiently.
		</SimpleText>
	</StructuredSection>
	<StructuredReference/>
</ArticlePost>
