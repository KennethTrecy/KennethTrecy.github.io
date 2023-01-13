import rgbToHex from "rgb-hex"
import { writable, derived } from "svelte/store"

export const mustBeInDarkMode = writable<boolean>(true)
export const themeName = derived(
	mustBeInDarkMode,
	isInDarkMode => isInDarkMode ? "dark-logo" : "light-logo"
)
export const textColor = derived(
	themeName,
	($name, set) => {
		setTimeout(() => {
			if (typeof window !== "undefined") {
				set(rgbToHex(window.getComputedStyle(
					document.querySelector(`[data-theme=${$name}]`)
					|| document.documentElement
				).color))
			}
		}, 25)
	}
)
