import type * as Kit from "@sveltejs/kit"
import type { CompleteCodeFileInfo } from "@/types/container_info"

export interface PageData {
	loadedFileInfos: CompleteCodeFileInfo[]
}

export type PageServerLoad = Kit.ServerLoad<Record<string, string>, PageData>
