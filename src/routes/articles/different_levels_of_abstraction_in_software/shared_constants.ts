import type { ViewableOwnerInfoTree } from "@/types/container_info"

import flattenOwnerTreeInfo from "@/components/general/flatten_owner_tree_info"

const associatedFileTree: ViewableOwnerInfoTree[] = [
	{
		"owner": "KennethTrecy",
		"repos": [
			{
				"repo": "demo_of_different_levels_of_abstraction",
				"branches": [
					{
						"branch": "master",
						"paths": [
							"src/package-level_abstraction.ts",
							"src/configuration-level_abstraction.ts",
							".env",
							"src/variable-level_abstraction.ts",
							"src/function-level_abstraction_variant_1.ts",
							"src/function-level_abstraction_variant_2.ts",
							"src/function-level_abstraction_variant_3.ts",
							"src/object-level_abstraction.ts",
							"src/interface-level_abstraction_variant_1.ts",
							"src/interface-level_abstraction_variant_2.ts"
						]
					}
				]
			}
		]
	}
]

export const associatedFileList = flattenOwnerTreeInfo(associatedFileTree)
