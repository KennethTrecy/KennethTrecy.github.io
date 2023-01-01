<script lang="ts">
	import "@/components/general.css"
	import Logo from "@/multimedia/logo.png"
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Roboto"/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,1"/>
	<style>
		body {
			font-family: "Roboto", sans-serif;
		}
	</style>
</svelte:head>
<header class="navbar">
	<div class="navbar-start flex flex-row items-center">
		<img class="flex-none w-8 h-auto" alt="logo" src={Logo}/>
		<p class="flex-1 ml-4 my-auto">
			KennethTrecy
		</p>
	</div>
	<nav class="navbar-end">
		<div class="dropdown dropdown-end">
			<span tabindex="0" for="navbar_dropdown" class="material-symbols-outlined">menu</span>
			<ul tabindex="0" id="navbar_dropdown" class="dropdown-content menu bg-primary-100">
				<li>
					<a href="/" class="inline-flex flex-row flex-nowrap items-center">
						<span class="material-symbols-outlined">home</span>
						<span class="flex-1">Home<span>
					</a>
					<a href="/projects" class="inline-flex flex-row flex-nowrap items-center">
						<span class="material-symbols-outlined">code</span>
						<span class="flex-1">Projects<span>
					</a>
					<a href="/about_myself" class="inline-flex flex-row flex-nowrap items-center">
						<span class="material-symbols-outlined">contact_page</span>
						<span class="flex-1">Contacts<span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
<main>
	<slot name="main"></slot>
</main>
<footer class=".footer">
	<p>Copyright © 2023 Kenneth Trecy Tobias</p>
</footer>

<style lang="postcss">
	main {
		min-height: calc(
			100vh - (
				4em /** Navbar minimum height **/
				+ (var(--navbar-padding, 0.5em) * 2)
				+ 2em /** Footer padding and line height **/
			)
		);
	}

	footer {
		text-align: center;
	}
</style>
