export interface MultimediaLink {
	link: string,
	densityPerPixel: number,
	isBase?: boolean
}

export interface MultimediaInfo {
	description: string
	responsiveLinks: MultimediaLink[],
	defaultLink: string
}
