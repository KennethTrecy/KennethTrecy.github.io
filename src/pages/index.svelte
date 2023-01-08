<script lang="ts">
	import Logo from "@/multimedia/logo.png"
	import Shell from "@/components/shell.svelte"
</script>

<Shell>
	<div slot="main" class="h-full w-full flex flex-col justify-center items-center">
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
			<section class="container flex flex-col md:flex-row">
				<div class="prose">
					<h2>Specialty</h2>
					<p>Web development is my expertise. I have tried different technologies too such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</p>
					<p>During my free time, I apply my skills on my personal projects.</p>
				</div>
			</section>
		</article>
	</div>
</Shell>

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
