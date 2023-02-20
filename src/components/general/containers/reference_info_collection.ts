import type { ReferenceInfo } from "@/types/reference"

import { writable } from "svelte/store"

export const referenceInfo = writable<ReferenceInfo[]>([])
