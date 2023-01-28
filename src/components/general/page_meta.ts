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
		const BASE_PATH = "src/routes"
		this.path = rawPath.slice(rawPath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
		this.version = version
		this.datePublished = datePublished
		this.dateModified = dateModified
	}
}
