<script lang="ts">
	import pageMeta from "@/routes/meta"
	import { externalTypes, internalTypes, authorTypes } from "@/components/general/links/constants"

	import Logo from "@/multimedia/logo.png"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ProjectCard from "@/components/general/project_card.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"

	const specialtyID = "specialty"
	const personalProjectsID = "personal_projects"
	const securityID = "security"
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle>
	<PrimaryHeading slot="title" prefix="🌀">KennethTrecy's Portfolio</PrimaryHeading>
	<svelte:fragment slot="content">
		<div class="divider"></div>
		<div
			itemprop="mainEntity"
			itemscope
			itemtype="https://schema.org/Person"
			class="hero lg:w-[125%] lg:ml-[-20%]">
			<!--
				To calculate left margin of hero component, the following method was done:
				1. Let `self` be the current component
				2. On large screens, resize the self's width to 125% of the own width.
				3. To center the contents, self's left margin size should be -25% of the own original
					width.
				4. Let 100 units be the original width of the self.
				5. The width of self on large screens is 100 units × 125% = 125 units.
				6. The target left margin size of self is 100 units × -25% = -25 units.
				7. Therefore, target margin size of self on large screens is -25 units / 125 units =
					20%.
			 -->
			<div class="hero-content flex flex-col xl:flex-row">
				<img
					itemprop="image"
					src={Logo}
					alt="Kenneth Trecy's logo"
					width="384"
					height="384"
					class="max-w-sm"/>
				<section class="max-w-sm xl:max-w-md text-center xl:text-left">
					<SecondaryHeading id="greetings" prefix="👋🏽">
						Hi, I am <span itemprop="givenName">Kenneth Trecy</span>!
					</SecondaryHeading>
					<p itemprop="knowsAbout" class="py-6 container md:px-0">
						I usually develop the back-end of the applications I have handled. I ensure their quality though automated tests through CI.
					</p>
					<BaseLink
						itemprop="mainEntityOfPage"
						address="/about_myself"
						relationship={[ ...internalTypes, ...authorTypes ]}
						context="self">
						<span class="btn btn-primary">Know more about me</span>
					</BaseLink>
				</section>
			</div>
		</div>
		<div class="divider"></div>
		<div class="flex flex-col justify-center items-center">
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/WebContent"
				class="container max-w-prose md:px-0"
				id={specialtyID}>
				<SecondaryHeading fragmentID={specialtyID} prefix="🌟">Specialty</SecondaryHeading>
				<p itemprop="text">Web development is my expertise. I have tried different technologies too such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</p>
				<p>During my free time, I apply my skills on my personal projects.</p>
			</section>
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/CreativeWorkSeries"
				class="container max-w-prose md:px-0"
				id={personalProjectsID}>
				<SecondaryHeading class={[ "my-4" ]} fragmentID={personalProjectsID} prefix="⛏️">
					Some of my personal projects
				</SecondaryHeading>
				<ul class="project_list list-none list-outside flex flex-col flex-wrap">
					<li>
						<ProjectCard
							title="Virdafils"
							description="A driver for Laravel framework which use a database like file storage system."
							link="https://github.com/KennethTrecy/virdafils"/>
					</li>
					<li>
						<ProjectCard
							title="Elomocato"
							description="Custom cast classes to be used with Laravel framework."
							link="https://github.com/KennethTrecy/elomocato"/>
					</li>
					<li>
						<ProjectCard
							title="Comroconbu"
							description="Builder for common Rollup configurations."
							link="https://github.com/KennethTrecy/comroconbu"/>
					</li>
				</ul>
				<p class="mt-4">
					Other projects can be found on the
					<ExternalLink address="https://github.com/KennethTrecy?tab=repositories">
						list of my respositories
					</ExternalLink>
					in
					<BaseLink
						address="https://github.com/KennethTrecy"
						relationship={[ ...externalTypes, ...authorTypes ]}
						context="other">
						my GitHub profile
					</BaseLink>
					or in this site's <BaseLink
						address="/projects"
						relationship={[ ...internalTypes, ...authorTypes ]}>
						project list</BaseLink>.
				</p>
			</section>
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/WebContent"
				class="container max-w-prose md:px-0"
				id={securityID}>
				<SecondaryHeading fragmentID={securityID} prefix="🔐">Security in mind</SecondaryHeading>
				<p itemprop="text">
					I also like reading articles about cybersecurity. For this reason, I build applications with security in mind as much as possible to be resilient from attacks.
				</p>
				<p itemprop="text">
					I have also made my recent commits to be signed with my own cryptographic keys.
				</p>
			</section>
		</div>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</MainArticle>

<style lang="postcss">
	@keyframes rotate_clockwise {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.hero-content img {
		@apply animate-spin;

		animation-duration: 8s;
		animation-timing-function: linear;
	}

	@screen md {
		.hero-content img {
			animation-play-state: paused;
		}
	}

	.hero-content:hover img {
		animation-play-state: running;
	}

	section:nth-child(2) > ul.project_list, section:nth-child(2) > ul.project_list > li {
		@apply m-0 p-0;
	}
</style>
