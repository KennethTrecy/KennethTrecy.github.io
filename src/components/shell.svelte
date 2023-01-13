<script lang="ts">
	import "@/components/general.css"
	import Logo from "@/multimedia/logo.png"

	import Icon from "@/components/general/icon.svelte"
	import Menu from "@/components/shell/menu.svelte"
	import ProfileLink from "@/components/shell/profile_link.svelte"
	import ThemeToggler from "@/components/shell/theme_toggler.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_link.svelte"
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
	<meta name="refresh" content="5"/>
</svelte:head>
<div class="drawer drawer-mobile">
	<input type="checkbox" class="drawer-toggle" id="menu_drawer_checkbox"/>
	<div class="drawer-content">
		<header class="navbar">
			<label
				tabindex="0"
				for="menu_drawer_checkbox"
				class="drawer-button btn bg-transparent border-transparent lg:hidden text-secondary hover:text-primary hover:bg-secondary">
				<Icon name="menu"/>
			</label>
			<nav class="navbar-center">
				<a href="/" class="text-color-inherit flex flex-row items-start">
					<img class="flex-none w-16 h-auto" alt="logo" src={Logo}/>
					<p class="flex-1 ml-2 my-auto">
						KennethTrecy
					</p>
				</a>
			</nav>
			<div class="flex-1 flex flex-row justify-end items-center">
				<ThemeToggler/>
			</div>
		</header>
		<main>
			<slot name="main"></slot>
		</main>
		<footer class="footer footer-center p-4">
			<div>
				<p>
					This website contains third-party packages:
					<ThirdPartyLink
						packageName="Svelte"
						homeLink="https://svelte.dev/"
						licenseName="MIT"
						licenseLink="https://github.com/sveltejs/svelte/blob/master/LICENSE.md"/>,
					<ThirdPartyLink
						packageName="Tailwind CSS"
						homeLink="https://tailwindcss.com/"
						licenseName="MIT"
						licenseLink="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"/>,
					<ThirdPartyLink
						packageName="@tailwindcss/typography"
						homeLink="https://github.com/tailwindlabs/tailwindcss-typography#readme"
						licenseName="MIT"
						licenseLink="https://github.com/tailwindlabs/tailwindcss-typography/blob/master/LICENSE"/>,
					<ThirdPartyLink
						packageName="daisyUI"
						homeLink="https://daisyui.com/"
						licenseName="MIT"
						licenseLink="https://github.com/saadeghi/daisyui/blob/master/LICENSE"/>, and
					<ThirdPartyLink
						packageName="rgb-hex"
						homeLink="https://github.com/sindresorhus/rgb-hex#readme"
						licenseName="MIT"
						licenseLink="https://github.com/sindresorhus/rgb-hex/blob/main/license"/>.

					The site has been built using
					<ThirdPartyLink
						packageName="SvelteKit"
						homeLink="https://kit.svelte.dev/"
						licenseName="MIT"
						licenseLink="https://github.com/sveltejs/kit/blob/master/LICENSE"/>.
				</p>
			</div>
		</footer>
		<footer class="footer justify-around items-center p-4 bg-base-200">
			<section class="md:grid-flow-col md:items-center">
				<img class="flex-none w-16 h-auto" alt="logo" src={Logo}/>
				<p>Copyright © 2023 Kenneth Trecy Tobias</p>
			</section>
			<section class="socials justify-center items-center justify-items-center">
				<span class="footer-title">Socials</span>
				<p class="grid grid-cols-2 grid-rows-1 gap-x-4">
					<ProfileLink
						address="https://www.linkedin.com/in/kenneth-trecy-tobias-4341a825b/"
						icon="linkedin"
						name="LinkedIn"/>
					<ProfileLink
						address="https://github.com/KennethTrecy/"
						icon="github"
						name="GitHub"/>
				</p>
			</section>
		</footer>
	</div>
	<div tabindex="0" class="drawer-side">
		<label for="menu_drawer_checkbox" class="drawer-overlay"></label>
		<aside class="w-80 bg-primary">
			<a href="/" class="mb-4 border-b p-4 text-color-inherit flex flex-col items-start">
				<img class="flex-none w-full h-auto" alt="logo" src={Logo}/>
				<p class="flex-1 my-auto text-2xl">
					KennethTrecy
				</p>
				<p class="prose">
					An open-source technology enthusiast, back-end experimentalist, and analytic tester.
				</p>
			</a>
			<Menu/>
		</aside>
	</div>
</div>

<style lang="postcss">
	:root {
		--main-height: calc(
			100vh - (
				4em /** Navbar minimum height **/
				+ (var(--navbar-padding, 0.5em) * 2)
				+ 1em + 1.25em /** 1st footer's padding and line height **/
				+ 1em + 5.25em /** 2nd footer's padding and socials' section height **/
			)
		)
	}

	main {
		min-height: var(--main-height);
	}

	footer .socials {
		grid-area: 1 / 2 / span 1 / span 1;
	}
</style>
