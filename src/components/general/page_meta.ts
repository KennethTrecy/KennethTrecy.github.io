export default class {
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
