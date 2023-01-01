<script lang="ts">
	import "@/components/general.css"
	import Logo from "@/multimedia/logo.png"
	import Menu from "@/components/shell/menu.svelte"

	let mustBeInDarkMode = true
	$: document.documentElement.setAttribute(
		"data-theme",
		mustBeInDarkMode ? "dark-logo" : "light-logo"
	)
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
		<div class="block md:hidden">
			<div class="dropdown dropdown-end">
				<span tabindex="0" for="navbar_dropdown" class="material-symbols-outlined">menu</span>
				<div tabindex="0" id="navbar_dropdown" class="dropdown-content">
					<Menu/>
				</div>
			</div>
		</div>
		<div class="hidden md:block">
			<Menu mustShowHorizontally={true}/>
		</div>
	</nav>
</header>
<main>
	<slot name="main"></slot>
</main>
<footer class="footer">
	<p>Copyright © 2023 Kenneth Trecy Tobias</p>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Current mode: Dark</span>
			<input type="checkbox" class="toggle" bind:checked={mustBeInDarkMode}/>
		</label>
	</div>
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
</style>
