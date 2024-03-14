import { type MultimediaLink } from "@/types/content_metadata"

export default function(links: MultimediaLink[]): string {
	if (links.length > 1) {
		return links.map(linkInfo => `${linkInfo.link} ${linkInfo.intrinsicWidth}w`).join(", ")
	}

	return ""
}
