export interface PersonName {
	givenName: string,
	familyName: string,
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
	readonly authors: PersonName[]

	/**
	 * The one who typed the document into web page.
	 */
	readonly encoder: PersonName

	/**
	 * The one who designed the document.
	 */
	readonly designer: PersonName[]

	/**
	 * Person who instructed to compile the document into web page.
	 */
	readonly creator: PersonName

	/**
	 * License of the document.
	 */
	readonly license: string
}
