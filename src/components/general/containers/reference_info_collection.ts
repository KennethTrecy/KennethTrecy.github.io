import { type ReferenceInfo } from "@/types/reference"

import { writable } from "svelte/store"

export const referenceInfos = writable<ReferenceInfo[]>([])

export function appendReference(info: ReferenceInfo): void {
	referenceInfos.update(otherReferences => [
		...new Set([ ...otherReferences, info ])
	])
}
