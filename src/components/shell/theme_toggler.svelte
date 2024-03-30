<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import { DARK_MODE, LIGHT_MODE, mustBeInDarkMode, themeName } from "@/components/general/theme"

	import Icon from "@/components/general/icon.svelte"
	import toggleBySpace from "@/utilities/toggle_by_space"

	$: if (typeof window !== "undefined") {
		document.documentElement.setAttribute(
			"data-theme",
			$themeName
		)
	}
	$: modeIcon = $mustBeInDarkMode ? "dark_mode" : "light_mode"
	$: currentTheme = $mustBeInDarkMode ? DARK_MODE : LIGHT_MODE

	onMount(() => {
		themeChange(false)
		$mustBeInDarkMode = document.documentElement.dataset.theme === DARK_MODE
	})

	function toggleThemeThoughMouse(_event: MouseEvent): void {
		$mustBeInDarkMode = !$mustBeInDarkMode
	}

	function toggleThemeThroughKeyboard(event: KeyboardEvent): void {
		toggleBySpace(event, () => {
			$mustBeInDarkMode = !$mustBeInDarkMode
		})
	}
</script>

<button
	tabindex="0"
	role="switch"
	aria-checked={$mustBeInDarkMode}
	data-set-theme={currentTheme}
	data-act-class={LIGHT_MODE}
	aria-label="Toggle theme"
	on:keyup|stopPropagation|preventDefault={toggleThemeThroughKeyboard}
	on:click={toggleThemeThoughMouse}
	class="btn bg-transparent border-transparent cursor-pointer text-secondary hover:text-primary hover:bg-secondary">
	<Icon name={modeIcon}/>
</button>
