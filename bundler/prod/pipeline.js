import { PRODUCTION } from "../core/environments"

import PluginArray from "./plugin_array"
import DevPipeline from "../dev/pipeline"

export default class Pipeline extends DevPipeline {
	constructor() {
		super(PRODUCTION)
	}

	get pluginArrayClass() {
		return PluginArray
	}
}
