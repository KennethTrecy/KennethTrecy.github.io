export interface MultimediaLink {
	link: string,
	intrinsicWidth: number
}

export interface MultimediaInfo {
	description: string
	responsiveLinks: MultimediaLink[],
	defaultLink: string
	defaultWidth: number
	defaultHeight: number
}
