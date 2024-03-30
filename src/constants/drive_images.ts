import { type MultimediaInfo } from "@/types/content_metadata"

import makeSharedMultimediaLink from "@/utilities/resource/make_shared_multimedia_link"

export const profile: MultimediaInfo = {
	"description": "Face of Kenneth Trecy",
	"responsiveLinks": [
		{
			"intrinsicWidth": 278,
			"link": makeSharedMultimediaLink("1sAS47sUZk2we3696sVRgNt6Ptr2flNwY", 278)
		}, {
			"intrinsicWidth": 556,
			"link": makeSharedMultimediaLink("1R9YHwCNRYmrnml1zQqZV5NTw7_NMQdhQ", 556)
		}, {
			"intrinsicWidth": 833,
			"link": makeSharedMultimediaLink("1BP5DQtkI7WsFEjCfb2-EFSPaliA8fG8I", 833)
		}
	],
	"defaultLink": makeSharedMultimediaLink("1V263hH_yvQF68NGad5-o5VW1eSqwg14E", 384),
	"defaultHeight": 384,
	"defaultWidth": 384
}
