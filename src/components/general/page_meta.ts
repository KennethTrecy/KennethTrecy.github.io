export default class {
	public readonly path: string
	public readonly version: string
	public readonly datePublished: Date
	public readonly dateModified: Date

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
