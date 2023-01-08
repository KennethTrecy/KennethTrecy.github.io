import { join, basename } from "node:path"
import { accessSync, constants } from "node:fs"

import html from "@rollup/plugin-html"
import alias from "@rollup/plugin-alias"
import postcss from "rollup-plugin-postcss"

import { ROOT } from "../core/paths"

import CorePluginArray from "../core/plugin_array"
import compileAttributes from "./compile_attributes"
import makeDefaultPageConfiguration from "./make_default_page_configuration"

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

	get postcssOutputPlugins() {
		return this.postcssPlugins
	}

	get postOutputPlugins() {
		return [
			postcss({
				"extract": basename(this.pathPair.originalRelativeOutputPath)
					.replace(".svelte", ".css"),
				"plugins": this.postcssOutputPlugins
			}),
			html({
				"fileName": basename(this.pathPair.originalRelativeOutputPath)
					.replace(".svelte", ".htm"),
				"template": ({
					attributes,
					files,
					meta,
					title
				}) => {
					const NEXT_LINE = "\n\t"
					return this.cleanHTML(this._template
						.replace("${attributes}", compileAttributes(attributes.html))
						.replace("${title}", title)
						.replace("${metas}", meta.map(metaInfo => {
							const metaAttributes = compileAttributes(metaInfo)
							return `<meta ${metaAttributes}/>`
						}).join(NEXT_LINE))
						.replace("${links}", files.css.map(
							file => `<link rel="stylesheet" href="${file.fileName}"/>`
						).join(NEXT_LINE) + (
							attributes.link === null
							? ""
							: attributes.link.map(dedicatedAttributes => {
								const linkAttributes = compileAttributes(dedicatedAttributes)
								return `<link ${linkAttributes}/>`
							})
						))
						.replace("${scripts}", files.js.map(
							file => `<script src="${file.fileName}"></script>`
						).join(NEXT_LINE) + (
							attributes.script === null
							? ""
							: attributes.script.map(dedicatedAttributes => {
								const scriptAttributes = compileAttributes(dedicatedAttributes)
								return `<script ${scriptAttributes}/>`
							})
						)))
				},
				...this._compiledConfiguration
			})
		]
	}

	cleanHTML(html) {
		return html
	}

	get _compiledConfiguration() {
		const pageConfigurationPath = this.pathPair.originalCompleteInputPath.replace(
			".svelte",
			".js"
		)

		const compiledConfigurations = makeDefaultPageConfiguration()

		try {
			accessSync(pageConfigurationPath, constants.R_OK)

			const uniqueConfiguration = require(join(ROOT, pageConfigurationPath))

			if (uniqueConfiguration.title) compiledConfigurations.title = uniqueConfiguration.title
			if (uniqueConfiguration.meta) compiledConfigurations.meta = [
				...compiledConfigurations.meta,
				...uniqueConfiguration.meta
			]
			if (uniqueConfiguration.attributes) {
				if (uniqueConfiguration.attributes.html) compiledConfigurations.meta = {
					...compiledConfigurations.attributes.html,
					...uniqueConfiguration.attributes.html
				}

				if (uniqueConfiguration.attributes.link) compiledConfigurations.meta = [
					...compiledConfigurations.attributes.link,
					...uniqueConfiguration.attributes.link
				]

				if (uniqueConfiguration.attributes.script) compiledConfigurations.meta = [
					...compiledConfigurations.attributes.script,
					...uniqueConfiguration.attributes.script
				]
			}
		} catch(error) {
			console.error(
				`There is no page configuration for ${this.pathPair.originalCompleteInputPath}.`,
				error
			)
		}

		return compiledConfigurations
	}
}
