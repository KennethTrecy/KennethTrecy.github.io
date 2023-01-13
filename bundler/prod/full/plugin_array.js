import { join, basename } from "node:path"

import { minify } from "html-minifier"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import purgecss from "@fullhuman/postcss-purgecss"

import run from "@rollup/plugin-run"
import alias from "@rollup/plugin-alias"
import postcss from "rollup-plugin-postcss"

import { ROOT, TAILWINDCSS_CONFIGURATION } from "../../core/paths"

import DevPluginArray from "../../dev/plugin_array"

export default class PluginArray extends DevPluginArray {
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

	get postcssOutputPlugins() {
		return [
			...super.postcssPlugins,
			purgecss({
				"content": [
					this.pathPair.completeOutputPath
				]
			})
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

	get _compiledConfiguration() {
		return {}
	}
}
