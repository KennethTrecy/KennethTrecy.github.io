import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ROOT } from "../core/paths"
import { DEVELOPMENT } from "../core/environments"

import PluginArray from "./plugin_array"
import CorePipeline from "../core/pipeline"
import SourceDirectory from "./source_directory"

export default class Pipeline extends CorePipeline {
	constructor(environment = DEVELOPMENT) {
		super(environment, "src/pages", "docs", "iife")
	}

	async readTemplate() {
		return await readFile(join(ROOT, "public/index.html"), { "encoding": "utf8" })
	}

	get pluginArrayClass() {
		return PluginArray
	}

	async toConfigurationArray() {
		const template = await this.readTemplate()
		return new SourceDirectory(
			this.commonInfo,
			pathPair => new this.pluginArrayClass(this._environment, pathPair, template).rawArray,
			[]
		).toConfigurationArray()
	}
}
