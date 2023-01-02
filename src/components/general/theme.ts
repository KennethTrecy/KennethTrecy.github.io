import { writable, derived, Writable } from "svelte/store"

export const mustBeInDarkMode = writable<boolean>(true)
export const themeName = derived(
	mustBeInDarkMode,
	$isInDarkMode => $isInDarkMode ? "dark-logo" : "light-logo"
)
