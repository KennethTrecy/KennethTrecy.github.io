<script lang="ts">
	import { onMount } from "svelte"
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

	import type { ExecutedCommandSetInfo, HeadingInfo } from "@/types/container_info"
	import type {
		PageData
	} from "@/routes/articles/different_levels_of_abstraction_in_software/$types"

	import pageMeta from "@/routes/articles/different_levels_of_abstraction_in_software/meta"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import CommonHead from "@/components/general/common_head.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
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
</script>

<ArticlePost {pageMeta}>
	<StructuredSection
		itemprop="about"
		itemtype="https://schema.org/ItemList"
		id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="about">
			<Keyword>Abstraction</Keyword> is a process to see a thing as a one rather than as the sum of its parts. It can be rules or equations that are applicable to most situations. In software development, abstractions are used to simplify the process which are common to other tasks. In other words, they are <Keyword>reusable</Keyword>. They take in different levels which this page is all about.
		</SimpleText>
		<SimpleText itemprop="mainEntity">
			There are <strong itemprop="numberOfItems">{levels.length}</strong> levels of abstraction listed below. They are ordered from easiest to hardest in implementation and customizability.
		</SimpleText>
		<StructuredList order="ascending" hasOwnScope={false}>
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
			<strong itemprop="mainEntity">This level of abstraction is the easiest to work on among other levels.</strong> However, a code at this level may have repetitive statements. Therefore, the program will be longer and will take time to read.
		</SimpleText>
		<SimpleText>
			In addition, most applications are only usable in this level. They are relatively easy to install as they can be standalone or in compressed portable format. The downside is that there is a <Keyword>limited customizability</Keyword> which are usually offered through <em>settings</em> or <em>preferences</em> option. It is expected that the users of these applications are anyone who have <Keyword>basic computer literacy</Keyword>.
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
		<SimpleText>
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
			}'s example</Bookmark>, the program can be modified to allow configuration-level customization. It uses an external package named <ExternalLink address="https://www.npmjs.com/package/dotenv">dotenv</ExternalLink> package to use the environment variables by using <code>process<span>.</span>env.&lt;variable name&gt;</code>. Note that the program uses logical OR operator (<code>||</code>) in order to use default messages.
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
		<SimpleText>
			This is almost similar to <Bookmark fragment={`#${levels[1].id}`}>{
				levels[1].text.toLocaleLowerCase()
			}</Bookmark>. However, the environment variables are not included in this level. <strong itemprop="mainEntity">This level refers to the programs/codes customizable by globally-scoped variables and locally-scoped variables.</strong>
		</SimpleText>
		<SimpleText>
			Should the user want to customize the program, knowledge in <Keyword>variable declaration</Keyword> (depending on the programming language used) is a must. They may also need to learn about enumerations or any different data types like boolean and integer.
		</SimpleText>
		<SimpleText>
			This level can be seen when making embedded programs for microcontrollers. It is helpful to declare multiple constants for values that are repeatedly used like indicating on or off, <ExternalLink address="https://www.youtube.com/watch?v=nPOKOi1jIK0">pin to the <abbr>LED</abbr>, or length of intervals</ExternalLink>. In addition, it can be seen in other fields of Information Technology (<abbr>I.T.</abbr>) such as web development and game development.
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
		<SimpleText>
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
		<SimpleText>
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
		<SimpleText>
			<strong itemprop="mainEntity">Hardest level of abstraction that someone could work on.</strong> It can be in a form of <ExternalLink address="https://www.php.net/manual/en/language.oop5.abstract.php">abstract classes</ExternalLink>, <ExternalLink address="https://en.cppreference.com/w/cpp/language/templates">templates</ExternalLink>, <ExternalLink address="https://doc.rust-lang.org/book/ch10-02-traits.html">traits</ExternalLink>, <ExternalLink address="https://www.typescriptlang.org/docs/handbook/2/generics.html">generics</ExternalLink>, or <ExternalLink address="https://doc.rust-lang.org/reference/macros.html">macros</ExternalLink>.
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
			}'s example</Bookmark> but with the application of <ExternalLink address="https://www.typescriptlang.org/docs/handbook/2/generics.html">Typescript's generics</ExternalLink>.
			The code may appear longer than the example in <Bookmark fragment={`#${levels[0].id}`}>{
				levels[0].text.toLocaleLowerCase()
			}</Bookmark>. However, making an interface-level abstraction has greater benefits on large projects than this example.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[8]}/>
		<SimpleText>
			In addition, an example based from <Bookmark fragment={`#${levels[3].id}`}>{
				levels[3].text.toLocaleLowerCase()
			}'s example</Bookmark> but with the application of <ExternalLink address="https://www.typescriptlang.org/docs/handbook/2/generics.html">Typescript's generics</ExternalLink> too. It appears to be shorter than the code above.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[9]}/>
	</StructuredSection>
	<StructuredSection id={conclusion.id}>
		<SecondaryHeading headingInfo={conclusion}/>
		<SimpleText>
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
</ArticlePost>
