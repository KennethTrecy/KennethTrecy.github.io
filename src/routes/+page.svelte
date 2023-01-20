<script lang="ts">
	import Logo from "@/multimedia/logo.png"

	import CommonHead from "@/components/general/common_head.svelte"
	import ProjectCard from "@/components/general/project_card.svelte"
</script>

<svelte:head>
	<CommonHead
		title="KennethTrecy"
		description="Personal website of KennethTrecy"
		keywords={[ "Kenneth Trecy", "portfolio" , "philippines" ]}
		pageVersion="0.1"/>
</svelte:head>

<div class="h-full w-full flex flex-col justify-center items-center">
	<article class="pb-8">
		<section class="hero">
			<div class="hero-content flex flex-col md:flex-row">
				<img src={Logo} alt="Kenneth Trecy's logo" class="max-w-sm"/>
				<div class="max-w-md text-center md:text-left">
					<h1 class="text-6xl font-bold">Hi, I am Kenneth Trecy!</h1>
					<p class="prose md:prose-lg py-6">
						I usually develop the back-end of the applications I have handled. I ensure their quality though automated tests through CI.
					</p>
					<a href="/about" class="btn btn-primary">Know more about me</a>
				</div>
			</div>
		</section>
		<div class="divider"></div>
		<section class="container my-4 flex flex-col justify-center items-center">
			<div class="prose md:prose-lg">
				<h2>Specialty</h2>
				<p>Web development is my expertise. I have tried different technologies too such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</p>
				<p>During my free time, I apply my skills on my personal projects.</p>

				<h3 class="my-4">Some of my personal projects</h3>
				<div class="max-w-prose flex flex-col flex-wrap">
					<ProjectCard
						title="Virdafils"
						description="A driver for Laravel framework which use a database like file storage system."
						link="https://github.com/KennethTrecy/virdafils"/>
					<ProjectCard
						title="Elomocato"
						description="Custom cast classes to be used with Laravel framework."
						link="https://github.com/KennethTrecy/elomocato"/>
					<ProjectCard
						title="Comroconbu"
						description="Builder for common Rollup configurations."
						link="https://github.com/KennethTrecy/comroconbu"/>
				</div>
				<p class="mt-4">
					Other projects can be found on the
					<a href="https://github.com/KennethTrecy?tab=repositories">
						list of my respositories
					</a>
					in <a href="https://github.com/KennethTrecy" rel="me">my GitHub profile</a>.
				</p>
			</div>
		</section>
		<section class="container my-4 flex flex-col justify-center items-center">
			<div class="prose md:prose-lg">
				<h2>Security in mind</h2>
				<p>I also like reading articles about cybersecurity. For this reason, I build applications with security in mind as much as possible to be resilient from attacks.</p>
				<p>I have also made my recent commits to be signed with my own cryptographic keys.</p>
			</div>
		</section>
	</article>
</div>

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
</style>
