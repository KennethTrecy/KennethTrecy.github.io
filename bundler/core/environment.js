import { PRODUCTION, DEVELOPMENT, TEST } from "./environments"

export default class Environment {
	constructor(environment) {
		this._environment = environment
	}

	get isInProduction() {
		return this._environment === PRODUCTION
	}

	get isInDevelopment() {
		return this._environment === DEVELOPMENT
	}

	get isInTest() {
		return this._environment === TEST
	}
}
