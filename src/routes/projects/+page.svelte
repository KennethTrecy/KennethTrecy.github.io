<script lang="ts">
	import type { HeadingInfo } from "@/types/container_info"

	import pageMeta from "@/routes/projects/meta"

	import CommonHead from "@/components/general/common_head.svelte"
	import ProjectCard from "@/components/general/card/project.svelte"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	interface SoftwareProject {
		name: string
		description: string
		repositoryLink: string
	}

	interface SoftwareProjectGroup extends HeadingInfo<"defined"> {
		extraListClasses: string[],
		extraListItemClasses: string[],
		description: string,
		projects: SoftwareProject[]
	}

	const rationale = defineHeadingInfo({
		"prefix": "❔",
		"text": "Rationale"
	})
	const otherProjects = defineHeadingInfo({
		"prefix": "🔶",
		"text": "Other projects"
	})

	const projectGroups: SoftwareProjectGroup[] = [
		{
			...defineHeadingInfo({
				"prefix": "🌏",
				"text": "Personal Public Projects"
			}),
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
			...defineHeadingInfo({
				"prefix": "🤝",
				"text": "Joint Public Projects"
			}),
			"description": "These projects became public after making a project with the other people. Currently, there is only one project listed and other projects will become public soon.",
			"projects": [
				{
					"name": "Talakutnangan",
					"description": "Capstone project aimed to be a consultation chat platform between professors and students.",
					"repositoryLink": "https://github.com/JAJAKUnit16/talakutnangan"
				}
			],
			"extraListClasses": [],
			"extraListItemClasses": []
		}, {
			...defineHeadingInfo({
				"prefix": "🏭",
				"text": "Template Projects"
			}),
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
			...defineHeadingInfo({
				"prefix": "🧪",
				"text": "Chearmyp Language Project"
			}),
			"description": "I did an experimental language back then named \"Chearmyp\". For now, it only works as data format for my other projects. Originally, the repositories below came from one source and I split it according to concerns. They are also public projects.",
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
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle itemtype="https://schema.org/CreativeWork">
	<PrimaryHeading slot="title">{pageMeta.title}</PrimaryHeading>
	<svelte:fragment slot="content">
		<StructuredSection itemprop="about" id={rationale.id}>
			<SecondaryHeading headingInfo={rationale}/>
			<SimpleText itemprop="mainEntity">
				Over the years, I have built and handled multiple projects to apply my knowledge. As a consequence, I gain experience to build them, to solve their technical issues, and to improve their technical design if possible. Building them helps me improve my decision-making in future projects and not to take things for granted that look like basic. Indeed, simplicity is hard.
			</SimpleText>
		</StructuredSection>
		{#each projectGroups as projectGroup}
			<StructuredSection id={projectGroup.id}>
				<SecondaryHeading headingInfo={projectGroup}/>
				<SimpleText itemprop="description">{projectGroup.description}</SimpleText>
				<StructuredList
					order="unordered"
					variant="project"
					class={projectGroup.extraListClasses}>
					{#each projectGroup.projects as project}
						<StructuredListItem
							variant="project"
							class={projectGroup.extraListItemClasses}>
							<ProjectCard
								title={project.name}
								description={project.description}
								link={project.repositoryLink}/>
						</StructuredListItem>
					{/each}
				</StructuredList>
			</StructuredSection>
		{/each}
		<StructuredSection id={otherProjects.id}>
			<SecondaryHeading headingInfo={otherProjects}/>
			<SimpleText itemprop="mainEntity text">
				Beside my personal projects, I have also contributed to on several open-source projects by requesting pull requests. Usually, I add a small part of code for a certain functionality that I want.
			</SimpleText>
		</StructuredSection>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>
