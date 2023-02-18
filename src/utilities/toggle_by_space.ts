export default function(event: KeyboardEvent, action: () => void): void {
	if (event.key === " ") {
		action()
	}
}
