import type { CodeFile } from "@/types/container_info"
import type {
	PageServerLoad
} from "@/routes/articles/different_levels_of_abstraction_in_software/$types"

import {
	associatedFileList
} from "@/routes/articles/different_levels_of_abstraction_in_software/shared_constants"

export const load: PageServerLoad = async({ fetch }) => {
	const pendingExtractedFileInfoList: Promise<CodeFile>[] = []

	for (const fileInfo of associatedFileList) {
		const repoNamespace = `${fileInfo.owner}/${fileInfo.repo}`
		const fileNamespace = `${fileInfo.branch}/${fileInfo.path}`
		const URL = `/api/v0/github/${repoNamespace}/code/${fileNamespace}`
		pendingExtractedFileInfoList.push(
			fetch(URL, { "method": "GET" })
				.then(response => response.json())
				.then(rawCodeInfo => rawCodeInfo as CodeFile)
				.then(codeFile => ({
					...codeFile,
					...fileInfo
				}))
		)
	}

	return {
		"loadedFileInfos": await Promise.all(pendingExtractedFileInfoList)
	}
}
