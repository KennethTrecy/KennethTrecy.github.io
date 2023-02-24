import type { MultimediaInfo } from "@/types/content_metadata"
import type { ViewableOwnerInfoTree } from "@/types/container_info"

import flattenOwnerTreeInfo from "@/utilities/resource/flatten_owner_tree_info"
import makeSharedMultimediaLink from "@/utilities/resource/make_shared_multimedia_link"

const associatedFileTree: ViewableOwnerInfoTree[] = [
	{
		"owner": "KennethTrecy",
		"repos": [
			{
				"repo": "kennethtrecy.pages.dev",
				"branches": [
					{
						"branch": "dev",
						"paths": [
							"src/routes/articles/different_levels_of_abstraction_in_software/meta.ts"
						]
					}
				]
			}
		]
	}
]

export const associatedFileList = flattenOwnerTreeInfo(associatedFileTree)

export const exactWidthDemo: MultimediaInfo = {
	"description": "Image of the hero content if it has the same exact width like its parent.",
	"responsiveLinks": [
		{
			"intrinsicWidth": 394,
			"link": makeSharedMultimediaLink("1yvFgU4SS8cnTMMe5Q4RUkuvXd-ayHVUg")
		}, {
			"intrinsicWidth": 591,
			"link": makeSharedMultimediaLink("1qZI43hUiVrODaVYTLNj5xkMPEl_vt8jn")
		}, {
			"intrinsicWidth": 788,
			"link": makeSharedMultimediaLink("1tIb097vdkOs4qWVTtd1MKk7KDgHqk_ql")
		}
	],
	"defaultLink": makeSharedMultimediaLink("1tIb097vdkOs4qWVTtd1MKk7KDgHqk_ql"),
	"defaultHeight": 585,
	"defaultWidth": 788
}

export const largerWidthDemo: MultimediaInfo = {
	"description": "Image of the hero content if it has the larger width than its parent.",
	"responsiveLinks": [
		{
			"intrinsicWidth": 394,
			"link": makeSharedMultimediaLink("1HQujFn_bLoEO5TOTJeNbmLNV5rn-xPDc")
		}, {
			"intrinsicWidth": 591,
			"link": makeSharedMultimediaLink("1NarukIAVkWH9YJssZZQljEUkuq30-iAh")
		}, {
			"intrinsicWidth": 788,
			"link": makeSharedMultimediaLink("17cH2pGqM7fGWcydbNGI2pLzwcVuUPTo6")
		}
	],
	"defaultLink": makeSharedMultimediaLink("17cH2pGqM7fGWcydbNGI2pLzwcVuUPTo6"),
	"defaultHeight": 607,
	"defaultWidth": 788
}
