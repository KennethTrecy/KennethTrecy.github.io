import type { Writable } from "svelte/store"

export default function(event: KeyboardEvent, toggle: Writable<boolean>): void {
	if (event.key === " ") {
		toggle.update(currentState => !currentState)
	}
}
