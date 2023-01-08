import { join, basename } from "node:path"

import { minify } from "html-minifier"
import autoprefixer from "autoprefixer"
import purgecss from "@fullhuman/postcss-purgecss"

import run from "@rollup/plugin-run"
import alias from "@rollup/plugin-alias"
import postcss from "rollup-plugin-postcss"

import { ROOT } from "../core/paths"

import CorePluginArray from "../core/plugin_array"

export default class PluginArray extends CorePluginArray {
	get postcssPlugins() {
		return [
			...super.postcssPlugins,
			autoprefixer()
		]
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
				"plugins": this.postcssOutputPlugins
			}),
			purgecss({
				"content": [
					this.pathPair.completeOutputPath
				]
			}),
			run()
		]
	}

	cleanHTML(html) {
		return minify(html, {
			"collapseInlineTagWhitespace": true,
			"collapseWhitespace": true,
			"keepClosingSlash": true,
			"sortAttributes": true,
			"sortClassName": true
		})
	}
}
