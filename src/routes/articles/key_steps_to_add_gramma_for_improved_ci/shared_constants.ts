import { type MultimediaInfo } from "@/types/content_metadata"
import { type ViewableOwnerInfoTree } from "@/types/container_info"

import flattenOwnerTreeInfo from "@/utilities/resource/flatten_owner_tree_info"
import makeSharedMultimediaLink from "@/utilities/resource/make_shared_multimedia_link"

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
							".github/workflows/e2e.yml",
							"t/e2e/index.test.ts"
						]
					}
				]
			}
		]
	}
]

export const associatedFileList = flattenOwnerTreeInfo(associatedFileTree)

export const successfulGrammarCheckSnapshot: MultimediaInfo = {
	"description": "A snapshot of successful grammar check.",
	"responsiveLinks": [
		{
			"intrinsicWidth": 267,
			"link": makeSharedMultimediaLink("1jdOIWHW9oQpjPywsybYq_iIBaBxN-lRM")
		}, {
			"intrinsicWidth": 400,
			"link": makeSharedMultimediaLink("1q9X9SCNDX3F_Litb5XP60zj9WwpnQ529")
		}, {
			"intrinsicWidth": 600,
			"link": makeSharedMultimediaLink("1kdIUG9TucWQtBHb42A5QNVsFiYef9M1P")
		}, {
			"intrinsicWidth": 1049,
			"link": makeSharedMultimediaLink("1Gt_z-pPWkPVyhtiVW_l_fCArQfN1yxNW")
		}
	],
	"defaultLink": makeSharedMultimediaLink("1trQYApLFFz9estfvFHcedMcc9omKxDDk"),
	"defaultHeight": 800,
	"defaultWidth": 1049
}
