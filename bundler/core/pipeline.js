import { CommonInfo } from "comroconbu"

import Environment from "./environment"

export default class Pipeline extends Environment {
	constructor(environment, source, destination, format) {
		super(environment)

		this.commonInfo = new CommonInfo(source, destination, format)
	}

	async toConfigurationArray() {
		return []
	}
}
