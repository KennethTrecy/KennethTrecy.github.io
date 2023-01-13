import { UnnamedSourceFile } from "comroconbu"

import { HYDRATED_PRODUCTION } from "../../core/environments"

import PluginArray from "./plugin_array"
import CorePipeline from "../../core/pipeline"
import RelativePathPair from "../../dev/relative_path_pair"

export default class Pipeline extends CorePipeline {
	constructor() {
		super(HYDRATED_PRODUCTION, "src/pages", "docs", "iife")
	}

	async toConfigurationArray() {
		const relativePath = process.env.PRERENDERED_RELATIVE_PATH ?? ""
		const template = process.env.PRERENDERED_TEMPLATE ?? []
		const pathPair = new RelativePathPair(
			this.commonInfo,
			relativePath,
			relativePath
		)

		return new UnnamedSourceFile(
			this.commonInfo,
			pathPair,
			new PluginArray(
				this._environment,
				pathPair,
				template
			).rawArray,
			[]
		).toConfigurationArray()
	}
}
