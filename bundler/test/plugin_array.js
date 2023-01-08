import { join, basename } from "node:path"

import alias from "@rollup/plugin-alias"
import postcss from "rollup-plugin-postcss"

import { ROOT } from "../core/paths"

import CorePluginArray from "../core/plugin_array"

export default class PluginArray extends CorePluginArray {
	constructor(environment, pathPair, template) {
		super(environment, pathPair)

		this._template = template
	}

	get preCompilePlugins() {
		return [
			alias({
				"entries": [
					{
						find: /^page/,
						replacement: join(ROOT, this.pathPair.originalCompleteInputPath)
					}
				]
			})
		]
	}

	get postOutputPlugins() {
		return [
			postcss({
				"extract": basename(this.pathPair.originalRelativeOutputPath)
					.replace(".svelte", ".css"),
				"plugins": this.postcssPlugins
			})
		]
	}
}
