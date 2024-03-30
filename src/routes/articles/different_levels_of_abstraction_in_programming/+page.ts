import { type CodeFile } from "@/types/container_info"
import {
	type PageLoad
} from "@/routes/articles/different_levels_of_abstraction_in_programming/$types.d"

import {
	associatedFileList
} from "@/routes/articles/different_levels_of_abstraction_in_programming/shared_constants"

export const load: PageLoad = async({ fetch }) => {
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
