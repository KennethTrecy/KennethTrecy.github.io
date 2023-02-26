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
						"branch": "staging",
						"paths": [
							"src/routes/articles/centering_a_child_element/+page.svelte"
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
			"intrinsicWidth": 591,
			"link": makeSharedMultimediaLink("1DWrIf-f4o3Rt8s2MbEfd3kSkgQeIRi99")
		}, {
			"intrinsicWidth": 591,
			"link": makeSharedMultimediaLink("1yvFgU4SS8cnTMMe5Q4RUkuvXd-ayHVUg")
		}, {
			"intrinsicWidth": 886,
			"link": makeSharedMultimediaLink("1qZI43hUiVrODaVYTLNj5xkMPEl_vt8jn")
		}, {
			"intrinsicWidth": 1181,
			"link": makeSharedMultimediaLink("1tIb097vdkOs4qWVTtd1MKk7KDgHqk_ql")
		}
	],
	"defaultLink": makeSharedMultimediaLink("1dHB5B0NlA_ANgTmmO65_PYqJNdJTliHq"),
	"defaultHeight": 878,
	"defaultWidth": 1181
}

export const largerWidthDemo: MultimediaInfo = {
	"description": "Image of the hero content if it has the larger width than its parent.",
	"responsiveLinks": [
		{
			"intrinsicWidth": 394,
			"link": makeSharedMultimediaLink("1s1i6YyBuhwMCeSttWwa5tydntjAqO-iW")
		}, {
			"intrinsicWidth": 591,
			"link": makeSharedMultimediaLink("1HQujFn_bLoEO5TOTJeNbmLNV5rn-xPDc")
		}, {
			"intrinsicWidth": 886,
			"link": makeSharedMultimediaLink("1NarukIAVkWH9YJssZZQljEUkuq30-iAh")
		}, {
			"intrinsicWidth": 1181,
			"link": makeSharedMultimediaLink("17cH2pGqM7fGWcydbNGI2pLzwcVuUPTo6")
		}
	],
	"defaultLink": makeSharedMultimediaLink("1-1-vIqlOfA4KZV-Lto2rHBF7GJyo9QSF"),
	"defaultHeight": 844,
	"defaultWidth": 1181
}
