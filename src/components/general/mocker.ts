import { browser } from "$app/environment"
import type { MockInfo } from "@/types/test_interface"

export default class {
	private static infos: MockInfo[] = []

	static mock(mockLogic: () => MockInfo, realLogic: () => void): void {
		if (browser) {
			realLogic()
		} else {
			this.infos.push(mockLogic())
		}
	}

	static unmockAll(): MockInfo[] {
		const infos = this.infos

		this.infos = []

		return infos
	}
}
