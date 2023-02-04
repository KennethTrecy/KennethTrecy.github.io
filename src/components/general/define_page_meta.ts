import type { PageMeta } from "@/types/head"

import { WEBSITE_OWNER } from "@/constants/names"
import { LICENSE } from "@/constants/miscellaneous_meta"

export default function(path: string, {
	version = "0.1",
	datePublished = new Date(),
	dateModified = datePublished,
	title = "Draft Page",
	description = "This is a draft page.",
	keywords = [ "draft" ],
	authors = [ WEBSITE_OWNER ],
	encoder = authors[0],
	designer = [ encoder ],
	creator = encoder,
	license = LICENSE
}: Partial<Exclude<PageMeta, "path">> = {}): PageMeta {
	return {
		path,
		version,
		datePublished,
		dateModified,
		title,
		description,
		keywords,
		authors,
		encoder,
		designer,
		creator,
		license
	}
}
