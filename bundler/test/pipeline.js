import { TEST } from "../core/environments"

import PluginArray from "./plugin_array"
import CorePipeline from "../core/pipeline"
import SourceDirectory from "./source_directory"

export default class Pipeline extends CorePipeline {
	constructor() {
		super(TEST, "src", "hidden/t", "cjs")
	}

	async toConfigurationArray() {
		return new SourceDirectory(
			this.commonInfo,
			pathPair => new PluginArray(this._environment, pathPair).rawArray,
			[]
		).toConfigurationArray()
	}
}
