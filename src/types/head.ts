interface PersonInfo {
	givenName: string,
	familyName: string,
	link: string
}

interface LicenseInfo {
	name: string,
	link: string
}

export interface PageMeta {
	/**
	 * Path of the document within the website.
	 */
	readonly path: string

	/**
	 * Version of the document.
	 */
	readonly version: string

	/**
	 * First published date of the document.
	 */
	readonly datePublished: Date

	/**
	 * Modification date of the document.
	 */
	readonly dateModified: Date

	/**
	 * Title of the document
	 */
	readonly title: string

	/**
	 * Description of the document.
	 */
	readonly description: string

	/**
	 * Keywords to understand the document.
	 */
	readonly keywords: string[]

	/**
	 * Author of the document (wrote the contents in either pen-and-paper or virtually).
	 */
	readonly authors: PersonInfo[]

	/**
	 * The one who typed the document into web page.
	 */
	readonly encoder: PersonInfo

	/**
	 * The ones who designed the document.
	 */
	readonly designers: PersonInfo[]

	/**
	 * Person who instructed to compile the document into web page.
	 */
	readonly creator: PersonInfo

	/**
	 * License of the document.
	 */
	readonly license: LicenseInfo

	/**
	 * URL of the image that represents the page.
	 *
	 * See: https://ogp.me/
	 */
	readonly imageURL: string

	/**
	 * Description of the image that represents the page.
	 *
	 * See: https://ogp.me/
	 */
	readonly imageDescription: string

	/**
	 * Canonical URL of the page.
	 *
	 * See: https://ogp.me/
	 */
	readonly pageURL: string

	/**
	 * Obejct type of the page.
	 *
	 * See: https://ogp.me/#types
	 */
	readonly objectType: "website"|"article"|"profile"
}
