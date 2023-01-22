<script lang="ts">
	import { externalTypes, internalTypes, authorTypes } from "@/components/general/links/constants"

	import Logo from "@/multimedia/logo.png"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ProjectCard from "@/components/general/project_card.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
</script>

<svelte:head>
	<CommonHead
		title="KennethTrecy"
		description="Personal website of KennethTrecy"
		keywords={[ "Kenneth Trecy", "portfolio" , "philippines" ]}
		pageVersion="0.1"/>
</svelte:head>

<MainArticle>
	<h1 slot="title">KennethTrecy's Portfolio</h1>
	<svelte:fragment slot="content">
		<div class="divider"></div>
		<div
			itemprop="mainEntity"
			itemscope
			itemtype="https://schema.org/Person"
			class="hero w-screen">
			<section class="hero-content flex flex-col md:flex-row">
				<img itemprop="image" src={Logo} alt="Kenneth Trecy's logo" class="max-w-sm"/>
				<div class="max-w-md text-center md:text-left">
					<h2 itemprop="headline">
						Hi, I am <span itemprop="givenName">Kenneth Trecy</span>!
					</h2>
					<p itemprop="knowsAbout" class="py-6">
						I usually develop the back-end of the applications I have handled. I ensure their quality though automated tests through CI.
					</p>
					<BaseLink
						itemprop="mainEntityOfPage"
						address="/about"
						relationship={[ ...internalTypes, ...authorTypes ]}>
						<span class="btn btn-primary">Know more about me</span>
					</BaseLink>
				</div>
			</section>
		</div>
		<div class="divider"></div>
		<div class="flex flex-col justify-center items-center">
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/WebContent"
				class="container max-w-prose md:px-0">
				<h2 itemprop="headline">Specialty</h2>
				<p itemprop="text">Web development is my expertise. I have tried different technologies too such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</p>
				<p>During my free time, I apply my skills on my personal projects.</p>
			</section>
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/CreativeWorkSeries"
				class="container max-w-prose md:px-0">
				<h2 class="my-4">Some of my personal projects</h2>
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
						target="other">my GitHub profile</BaseLink>.
				</p>
			</section>
			<section
				itemprop="hasPart"
				itemscope
				itemtype="https://schema.org/WebContent"
				class="container max-w-prose md:px-0">
				<h2 itemprop="headline">Security in mind</h2>
				<p itemprop="text">
					I also like reading articles about cybersecurity. For this reason, I build applications with security in mind as much as possible to be resilient from attacks.
				</p>
				<p itemprop="text">
					I have also made my recent commits to be signed with my own cryptographic keys.
				</p>
			</section>
		</div>
	</svelte:fragment>
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

	section:nth-child(1) img {
		@apply animate-spin;

		animation-duration: 8s;
		animation-timing-function: linear;
		animation-play-state: paused;
	}

	section:nth-child(1):hover img {
		animation-play-state: running;
	}

	section:nth-child(2) > ul.project_list, section:nth-child(2) > ul.project_list > li {
		@apply m-0 p-0;
	}
</style>
