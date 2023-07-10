import type { ViewableOwnerInfoTree } from "@/types/container_info"

import flattenOwnerTreeInfo from "@/utilities/resource/flatten_owner_tree_info"

const associatedFileTree: ViewableOwnerInfoTree[] = [
	{
		"owner": "KennethTrecy",
		"repos": [
			{
				"repo": "demonstration_of_automated_proofreading_using_gramma",
				"branches": [
					{
						"branch": "master",
						"paths": [
							"playwright.config.ts",
							".github/workflows/e2e.yml"
						]
					}
				]
			}
		]
	}
]

export const associatedFileList = flattenOwnerTreeInfo(associatedFileTree)
