<script lang="ts">
	import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"
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
		description: string,
		projects: SoftwareProject[]
	}

	const projectGroups: SoftwareProjectGroup[] = [
		{
			"name": "Working Projects",
			"description": "These projects were used at least once in other software (private or public). Some of them are independent. Some complement or require other software with their recent versions or old versions only. I cannot maintain all of my personal projects, yet I try to keep the code future-proof and welcome changes as much as possible.",
			"projects": []
		}
	]
</script>

<svelte:head>
	<CommonHead
		title="Projects | KennethTrecy"
		description="List of personal open-source projects made by Kenneth Trecy"
		keywords={[ "Kenneth Trecy", "personal", "projects" ]}
		{pageVersion}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/CreativeWorkSeries">
	<h1 slot="title" class="prose md:prose-lg"><span class="text-5xl">List of Involved Projects</span></h1>
	<svelte:fragment slot="content">
		<section itemprop="about" itemscope itemtype="https://schema.org/WebContent">
			<h2 itemprop="headline name">Rationale</h2>
			<p itemprop="mainEntity">
				Over the years, I have built multiple projects to apply my knowledge. As a consequence, I gain experience to build them, to solve their technical issues, and to improve their technical design if possible. Building them helps me improve my decision-making in future projects and not to take things for granted that look like basic. Indeed, simplicity is hard.
			</p>
		</section>
		{#each projectGroups as projectGroup}
			<section itemprop="hasPart" itemscope itemtype="https://schema.org/CreativeWorkSeries">
				<h2 itemprop="headline name">{projectGroup.name}</h2>
				<p itemprop="about">{projectGroup.description}</p>
				<ul class="flex list-none">
					{#each projectGroup.projects as project}
						<li itemprop="hasPart">
							<ProjectCard
								title={project.name}
								description={project.description}
								link={project.repositoryLink}/>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</svelte:fragment>
	<PageDetailCard slot="metadata" datePublished={FIRST_PUBLICATION_DATE} {pageVersion}/>
</MainArticle>
