import rgbToHex from "rgb-hex"
import { derived, writable } from "svelte/store"

export const DARK_MODE = "dark-logo"
export const LIGHT_MODE = "light-logo"

export const mustBeInDarkMode = writable<boolean>(true)
export const themeName = derived(
	mustBeInDarkMode,
	isInDarkMode => {
		if (isInDarkMode) return DARK_MODE
		return LIGHT_MODE
	}
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
