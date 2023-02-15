import type { PageMeta } from "@/types/content_metadata"

import Logo from "@/multimedia/logo.png"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"
import { LICENSE, LICENSE_URL } from "@/constants/miscellaneous_meta"
import {
	WEBSITE_OWNER_FAMILY_NAME,
	WEBSITE_OWNER_GIVEN_NAME,
	WEBSITE_OWNER_LINK
} from "@/constants/names"

export default function(path: string, {
	version = "0.1",
	datePublished = new Date(),
	dateModified = datePublished,
	title = "Draft Page",
	description = "This is a draft page.",
	keywords = [ "draft" ],
	authors = [
		{
			"givenName": WEBSITE_OWNER_GIVEN_NAME,
			"familyName": WEBSITE_OWNER_FAMILY_NAME,
			"link": WEBSITE_OWNER_LINK
		}
	],
	encoder = authors[0],
	designers = [ encoder ],
	creator = encoder,
	license = {
		"name": LICENSE,
		"link": LICENSE_URL
	},
	pageURL = `${PUBLIC_PRODUCTION_BASE_URL}${path}`,
	image = {
		"defaultLink": `${PUBLIC_PRODUCTION_BASE_URL}${Logo}`,
		"defaultHeight": 720,
		"defaultWidth": 720,
		"description": "Logo of Kenneth Trecy Tobias",
		"responsiveLinks": []
	},
	objectType = "website"
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
		designers,
		creator,
		license,
		pageURL,
		image,
		objectType
	}
}
