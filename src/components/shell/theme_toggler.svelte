<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import { DARK_MODE, LIGHT_MODE, mustBeInDarkMode, themeName } from "@/components/general/theme"

	import Icon from "@/components/general/icon.svelte"
	import toggleBySpace from "@/utilities/toggle_by_space"

	$: if (typeof window !== "undefined") document.documentElement.setAttribute(
		"data-theme",
		$themeName
	)
	$: modeIcon = $mustBeInDarkMode ? "dark_mode" : "light_mode"
	$: otherTheme = $mustBeInDarkMode ? LIGHT_MODE : DARK_MODE

	onMount(() => {
		themeChange(false)
		$mustBeInDarkMode = document.documentElement.dataset.theme === DARK_MODE
	})

	function toggleTheme(event: KeyboardEvent): void {
		toggleBySpace(event, () => $mustBeInDarkMode = !$mustBeInDarkMode)
	}
</script>

<label
	tabindex="0"
	role="switch"
	aria-checked={$mustBeInDarkMode}
	data-set-theme={otherTheme}
	data-act-class={LIGHT_MODE}
	on:keyup|stopPropagation|preventDefault={toggleTheme}
	class="btn bg-transparent border-transparent cursor-pointer text-secondary hover:text-primary hover:bg-secondary">
	<Icon name={modeIcon}/>
	<input
		type="checkbox"
		class="hidden"
		bind:checked={$mustBeInDarkMode}/>
</label>
