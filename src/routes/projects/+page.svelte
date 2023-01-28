<script lang="ts">
	import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ProjectCard from "@/components/general/project_card.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"

	const pageVersion = "0.1"

	interface SoftwareProject {
		name: string
		description: string
		repositoryLink: string
	}

	interface SoftwareProjectGroup {
		name: string,
		extraListClasses: string[],
		extraListItemClasses: string[],
		description: string,
		projects: SoftwareProject[]
	}

	const projectGroups: SoftwareProjectGroup[] = [
		{
			"name": "🌏 Personal Public Projects",
			"description": "These projects were used at least once in other software (private or public). Some of them are independent. Some complement or require other software with their recent versions or old versions only. I cannot maintain all of my personal projects, yet I try to keep the code future-proof and welcome changes as much as possible.",
			"projects": [
				{
					"name": "Virdafils",
					"description": "Package to be used with Laravel framework to use database as storage for files.",
					"repositoryLink": "https://github.com/KennethTrecy/virdafils"
				}, {
					"name": "Elomocato",
					"description": "Helps in casting data for Laravel framework-based systems.",
					"repositoryLink": "https://github.com/KennethTrecy/elomocato"
				}, {
					"name": "Comroconbu",
					"description": "Builds common configuration I use with Rollup",
					"repositoryLink": "https://github.com/KennethTrecy/comroconbu"
				}, {
					"name": "Abstract Chearmyp Boundary",
					"description": "Contains traits generalizing different kinds of boundary or ranges.",
					"repositoryLink": "https://github.com/KennethTrecy/abstract_chearmyp_boundary"
				}, {
					"name": "Abstract Chearmyp Source",
					"description": "Contains traits which describes possible kinds of data source.",
					"repositoryLink": "https://github.com/KennethTrecy/abstract_chearmyp_source"
				}, {
					"name": "Pruecendrae Core",
					"description": "Core of Pruecendrae console application managing multiple tasks using threads.",
					"repositoryLink": "https://github.com/KennethTrecy/pruecendrae_core"
				}, {
					"name": "Pruecendrae CLI",
					"description": "Controller for Pruecendrae through command-line.",
					"repositoryLink": "https://github.com/KennethTrecy/pruecendrae_cli"
				}
			],
			"extraListClasses": [ "md:max-h-[50rem]" ],
			"extraListItemClasses": [ "md:w-1/2" ]
		}, {
			"name": "🏭 Template Projects",
			"description": "Once a certain a workflow becomes repetitive for me in different personal projects, I generalize it into one public template. I would be happy if someone uses one of these.",
			"projects": [
				{
					"name": "Origenne template",
					"description": "General-purpose template repository which is also a basis of my other templates too.",
					"repositoryLink": "https://github.com/KennethTrecy/origenne_template"
				},	{
					"name": "Web template",
					"description": "Template repository for building web applications.",
					"repositoryLink": "https://github.com/KennethTrecy/web_template"
				},	{
					"name": "Feo template",
					"description": "Template repository for building application based on Rust.",
					"repositoryLink": "https://github.com/KennethTrecy/feo_template"
				}
			],
			"extraListClasses": [],
			"extraListItemClasses": []
		}, {
			"name": "🧪 Chearmyp Language Project",
			"description": "I did a experimental language back then named \"Chearmyp\". For now, it only works as data format for my other projects. Originally, the repositories below came from one source and I split it according to concerns. They are also public projects.",
			"projects": [
				{
					"name": "Abstract Chearmyp Token",
					"description": "Contains traits describing tokens used for Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/abstract_chearmyp_token"
				}, {
					"name": "Chearmyp Token",
					"description": "Contains token-related data structures used for Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/chearmyp_token"
				}, {
					"name": "Chearmyp Lexer",
					"description": "Processes the tokens to understand code in Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/chearmyp_lexer"
				}, {
					"name": "Abstract Chearmyp Node",
					"description": "Contains traits describing nodes used for Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/abstract_chearmyp_node"
				}, {
					"name": "Chearmyp Node",
					"description": "Contains node-related data structures used for Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/chearmyp_node"
				}, {
					"name": "Chearmyp Parser",
					"description": "Processes the nodes to understand code in Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/chearmyp_parser"
				}, {
					"name": "Chearmyp Reference",
					"description": "Collection of documents specifying the Chearmyp language.",
					"repositoryLink": "https://github.com/KennethTrecy/chearmyp_reference"
				}
			],
			"extraListClasses": [ "md:max-h-[60rem]" ],
			"extraListItemClasses": [ "md:w-1/2" ]
		}
	]
</script>

<svelte:head>
	<CommonHead
		title="Projects"
		description="Kenneth Trecy is has a decade of experience in programming websites. In this page, an overview of different projects he was involve have been listed."
		keywords={[ "Kenneth Trecy", "involved", "personal", "projects" ]}
		{pageVersion}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/CreativeWorkSeries">
	<Heading slot="title">List of Involved Projects</Heading>
	<svelte:fragment slot="content">
		<section itemprop="about" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">❔Rationale</h2>
			<p itemprop="mainEntity">
				Over the years, I have built and handled multiple projects to apply my knowledge. As a consequence, I gain experience to build them, to solve their technical issues, and to improve their technical design if possible. Building them helps me improve my decision-making in future projects and not to take things for granted that look like basic. Indeed, simplicity is hard.
			</p>
		</section>
		{#each projectGroups as projectGroup}
			<section itemprop="hasPart" itemscope itemtype="https://schema.org/CreativeWorkSeries">
				<h2 itemprop="headline name">{projectGroup.name}</h2>
				<p itemprop="about">{projectGroup.description}</p>
				<ul
					class={[
						"project_list",
						"list-none",
						"flex",
						"flex-col",
						"flex-wrap",
						...projectGroup.extraListClasses
					].join(" ")}>
					{#each projectGroup.projects as project}
						<li class={projectGroup.extraListItemClasses.join(" ")}>
							<ProjectCard
								title={project.name}
								description={project.description}
								link={project.repositoryLink}/>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
		<section itemprop="hasPart" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">🔶 Other projects</h2>
			<p itemprop="mainEntity">
				Beside my personal projects, I have also contributed to on several open-source projects by requesting pull requests. Usually, I add a small part of code for a certain functionality that I want.
			</p>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" datePublished={FIRST_PUBLICATION_DATE} {pageVersion}/>
</MainArticle>

<style lang="postcss">
	ul.project_list, ul.project_list > li {
		@apply m-0 p-0;
	}
</style>
