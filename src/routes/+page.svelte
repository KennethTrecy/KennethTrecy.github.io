<script>
	import Logo from "@/multimedia/logo.png"

	import Icon from "@/components/general/icon.svelte"

	const name = "Kenneth Trecy Tobias"
</script>

<svelte:head>
	<title>KennethTrecy</title>
	<meta name="description" content="Personal website of KennethTrecy"/>
	<meta name="keywords" content="Kenneth Trecy,portfolio,philippines"/>
	<meta name="web_author" content={name}/>
	<meta name="designer" content={name}/>
	<meta name="creator" content={name}/>
	<meta name="page-version" content="0.1"/>
	<meta name="license" content="MIT"/>
</svelte:head>

<div class="h-full w-full flex flex-col justify-center items-center">
	<article class="pb-8">
		<section class="hero">
			<div class="hero-content flex flex-col md:flex-row">
				<img src={Logo} alt="Kenneth Trecy's logo" class="max-w-sm"/>
				<div class="max-w-md text-center md:text-left">
					<h1 class="text-6xl font-bold">Hi, I am Kenneth Trecy!</h1>
					<p class="prose py-6">
						I usually develop the back-end of the applications I have handled. I ensure their quality though automated tests through CI.
					</p>
					<button class="btn btn-primary">Know more about me</button>
				</div>
			</div>
		</section>
		<div class="divider"></div>
		<section class="container my-4 flex flex-col md:flex-row">
			<div class="prose">
				<h2>Specialty</h2>
				<p>Web development is my expertise. I have tried different technologies too such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</p>
				<p>During my free time, I apply my skills on my personal projects.</p>
			</div>
			<section class="flex flex-col md:flex-row flex-wrap">
				<h3 class="prose">Personal Projects</h3>
				<div class="card bg-base-200">
					<div class="card-body">
						<h3 class="card-title prose">Virdafils</h3>
						<p class="prose">
							A driver for Laravel framework which use a database like file storage system.
						</p>
						<div class="card-actions">
							<a
								href="https://github.com/KennethTrecy/virdafils"
								class="flex flex-row flex-nowrap items-center justify-end">
								<span>Visit</span><Icon name="chevron_right"/>
							</a>
						</div>
					</div>
				</div>
			</section>
		</section>
		<section class="container my-4 flex flex-col md:flex-row">
			<div class="prose">
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
