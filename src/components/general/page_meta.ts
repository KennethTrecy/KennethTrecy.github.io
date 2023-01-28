export default class {
	/**
	 * Path of the document within the website.
	 */
	public readonly path: string

	/**
	 * Version of the document.
	 */
	public readonly version: string

	/**
	 * First published date of the document.
	 */
	public readonly datePublished: Date

	/**
	 * Modification date of the document.
	 */
	public readonly dateModified: Date

	/**
	 * title of the document
	 */
	public readonly title: string

	/**
	 * Description of the document.
	 */
	public readonly description: string

	/**
	 * Keywords to understand the document.
	 */
	public readonly keywords: string[]

	/**
	 * Author of the document (wrote the contents in either pen-and-paper or virtually).
	 */
	public readonly author: string

	/**
	 * The one who typed the document into web page.
	 */
	public readonly encoder: string

	/**
	 * the one who designed the document.
	 */
	public readonly designer: string[]

	/**
	 * Person who instructed to compile the document into web page.
	 */
	public readonly creator: string

	/**
	 * License of the document.
	 */
	public readonly license: string

	constructor(rawPath: string, {
		version = "0.1",
		datePublished = new Date(),
		dateModified = datePublished
	}: {
		"version"?: string
		"datePublished"?: Date
		"dateModified"?: Date
	} = {}) {
		this.path = rawPath
		this.version = version
		this.datePublished = datePublished
		this.dateModified = dateModified
	}
}
