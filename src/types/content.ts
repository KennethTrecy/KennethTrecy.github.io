export interface MultimediaLink {
	link: string,
	densityPerPixel: number
}

export interface MultimediaInfo {
	description: string
	responsiveLinks: MultimediaLink[],
	defaultLink: string
}
