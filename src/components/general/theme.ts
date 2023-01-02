import { writable } from "svelte/store"

export const mustBeInDarkMode = writable<boolean>(true);
