import autoprefixer from "autoprefixer"
import { minify } from "html-minifier"
import purgecss from "@fullhuman/postcss-purgecss"

import DevelopmentPluginArray from "../dev/plugin_array"

export default class PluginArray extends DevelopmentPluginArray {
	get postcssPlugins() {
		return [
			...super.postcssPlugins,
			autoprefixer()
		]
	}

	get postOutputPlugins() {
		return [
			...super.postOutputPlugins,
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
}
