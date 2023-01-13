import { PRODUCTION, DEVELOPMENT, TEST, HYDRATED_PRODUCTION } from "./environments"

export default class Environment {
	constructor(environment) {
		this._environment = environment
	}

	get isInProduction() {
		return this._environment === PRODUCTION
	}

	get isInHydratedProduction() {
		return this._environment === HYDRATED_PRODUCTION
	}

	get isInDevelopment() {
		return this._environment === DEVELOPMENT
	}

	get isInTest() {
		return this._environment === TEST
	}
}
