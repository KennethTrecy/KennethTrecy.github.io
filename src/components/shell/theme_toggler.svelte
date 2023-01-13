<script lang="ts">
	import { mustBeInDarkMode, themeName } from "@/components/general/theme"

	import Icon from "@/components/general/icon.svelte"

	$: if (typeof window !== "undefined") document.documentElement.setAttribute(
		"data-theme",
		$themeName
	)
	$: modeIcon = $mustBeInDarkMode ? "dark_mode" : "light_mode"
</script>

<label class="btn bg-transparent border-transparent cursor-pointer text-secondary hover:text-primary hover:bg-secondary">
	<Icon name={modeIcon}/>
	<input
		type="checkbox"
		class="hidden"
		bind:checked={$mustBeInDarkMode}/>
</label>
