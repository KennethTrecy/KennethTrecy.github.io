<script lang="ts">
	import "@/components/general.css"

	import Logo from "@/multimedia/logo.png"
	import { LICENSE, LICENSE_URL } from "@/constants/miscellaneous_meta"

	import Menu from "@/components/shell/menu.svelte"
	import Icon from "@/components/general/icon.svelte"
	import ProfileLink from "@/components/shell/profile_link.svelte"
	import ThemeToggler from "@/components/shell/theme_toggler.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import ThirdPartyLink from "@/components/shell/third-party_link.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Roboto&family=Material+Symbols+Outlined:wght,FILL@400,1&display=swap"/>
	<style>
		body {
			font-family: "Roboto", "Segoe UI", Tahoma, Verdana, Geneva, sans-serif;
		}
	</style>
</svelte:head>
<div itemscope itemtype="https://schema.org/WebSite" class="drawer drawer-mobile">
	<input
		type="checkbox"
		class="drawer-toggle"
		aria-labelledby="menu_toggler"
		id="menu_drawer_checkbox"/>
	<div class="drawer-content">
		<header class="navbar border-b-[0.05rem] mb-8">
			<label
				tabindex="0"
				id="menu_toggler"
				for="menu_drawer_checkbox"
				class="drawer-button btn bg-transparent border-transparent lg:hidden text-secondary hover:text-primary hover:bg-secondary">
				<Icon name="menu"/>
			</label>
			<nav class="navbar-center">
				<a href="/" class="text-color-inherit flex flex-row items-start">
					<img src={Logo} alt="logo" width="64" height="64" class="flex-none w-16 h-auto"/>
					<p itemprop="name text" class="flex-1 ml-2 my-auto">
						KennethTrecy
					</p>
				</a>
			</nav>
			<div class="flex-1 flex flex-row justify-end items-center">
				<ThemeToggler/>
			</div>
		</header>
		<main
			itemprop="mainEntity"
			itemscope
			itemtype="https://schema.org/WebPage"
			class="flex flex-col justify-center items-center">
			<slot name="main"></slot>
		</main>
		<footer class="footer footer-center p-4">
			<div>
				<SimpleText>
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
						licenseLink="https://github.com/saadeghi/daisyui/blob/master/LICENSE"/>,
					<ThirdPartyLink
						packageName="rgb-hex"
						homeLink="https://github.com/sindresorhus/rgb-hex#readme"
						licenseName="MIT"
						licenseLink="https://github.com/sindresorhus/rgb-hex/blob/main/license"/>, and
					<ThirdPartyLink
						packageName="theme-change"
						homeLink="https://github.com/saadeghi/theme-change#readme"
						licenseName="MIT"
						licenseLink="https://github.com/saadeghi/theme-change/blob/master/LICENSE"/>.

					The site has been built using
					<ThirdPartyLink
						packageName="SvelteKit"
						homeLink="https://kit.svelte.dev/"
						licenseName="MIT"
						licenseLink="https://github.com/sveltejs/kit/blob/master/LICENSE"/>.
				</SimpleText>
			</div>
		</footer>
		<footer class="footer justify-around items-center p-4 bg-base-200">
			<section class="grid-flow-col items-center">
				<img alt="logo" src={Logo} width="64" height="64" class="flex-none w-16 h-auto"/>
				<SimpleText itemprop="copyrightNotice">
					Copyright © <span itemprop="copyrightYear">2023</span>
					<span itemprop="copyrightHolder">Kenneth Trecy Tobias</span>.
				</SimpleText>
			</section>
			<section class="col-span-2 md:col-span-1 place-self-stretch md:place-self-auto text-center">
				<p itemprop="text" class="w-full">
					Website's code (not texts containing my personal information) are under
					<ExternalLink
						address={LICENSE_URL}
						itemprop="license">{LICENSE} license</ExternalLink>.
				</p>
			</section>
			<section class="socials place-self-end mr-4 md:place-self-auto md:mr-auto justify-center items-center justify-items-center">
				<span class="footer-title opacity-100">Socials</span>
				<p itemprop="text" class="grid grid-cols-2 grid-rows-1 gap-x-4">
					<ProfileLink
						address="https://www.linkedin.com/in/kenneth-trecy-tobias/"
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
			<a
				itemprop="creator" itemscope itemtype="https://schema.org/Person"
				href="/"
				class="mb-4 border-b p-4 text-color-inherit flex flex-col items-start">
				<img
					itemprop="image"
					src={Logo}
					alt="Logo of Kenneth Trecy"
					width="288"
					height="288"
					class="flex-none w-full h-auto"/>
				<p itemprop="name text" class="flex-1 my-auto text-2xl">
					KennethTrecy
				</p>
				<p itemprop="description text" class="prose">
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
