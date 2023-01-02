<script lang="ts">
	import "@/components/general.css"
	import Logo from "@/multimedia/logo.png"
	import Menu from "@/components/shell/menu.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_link.svelte"

	let mustBeInDarkMode = true
	$: document.documentElement.setAttribute(
		"data-theme",
		mustBeInDarkMode ? "dark-logo" : "light-logo"
	)
	$: friendlyCurrentMode = mustBeInDarkMode ? "Dark" : "Light"
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
				<label tabindex="0" for="navbar_dropdown" class="material-symbols-outlined">menu</label>
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
<footer class="footer p-4">
	<div>
		<p>
			This website contains third-party frameworks:
			<ThirdPartyLink
				packageName="Svelte"
				homeLink="https://svelte.dev/"
				licenseName="MIT"
				licenseLink="https://github.com/sveltejs/svelte/blob/master/LICENSE.md"/>
			<ThirdPartyLink
				packageName="Tailwind CSS"
				homeLink="https://tailwindcss.com/"
				licenseName="MIT"
				licenseLink="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"/>
			<ThirdPartyLink
				packageName="daisyUI"
				homeLink="https://daisyui.com/"
				licenseName="MIT"
				licenseLink="https://github.com/saadeghi/daisyui/blob/master/LICENSE"/>
		</p>
	</div>
</footer>
<footer class="footer p-4 bg-base-200">
	<div class="grid-flow-col items-center">
		<img class="flex-none w-16 h-auto" alt="logo" src={Logo}/>
		<p>Copyright © 2023 Kenneth Trecy Tobias</p>
	</div>
	<div class="md:place-self-center md:justify-self-end">
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Current mode: {friendlyCurrentMode}</span>
				<input
					type="checkbox"
					class="toggle toggle-secondary ml-4"
					bind:checked={mustBeInDarkMode}/>
			</label>
		</div>
	</div>
</footer>

<style lang="postcss">
	main {
		min-height: calc(
			100vh - (
				4em /** Navbar minimum height **/
				+ (var(--navbar-padding, 0.5em) * 2)
				+ 1em + 1.25em /** 1st footer's padding and line height **/
				+ 2em + 4em /** 2nd footer's padding and logo height **/
			)
		);
	}
</style>
