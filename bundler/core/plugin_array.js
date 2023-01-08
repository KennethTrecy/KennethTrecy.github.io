import { join } from "node:path"

import tailwind from "tailwindcss"
import url from "@rollup/plugin-url"
import alias from "@rollup/plugin-alias"
import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import esbuild from "rollup-plugin-esbuild-transform"

import { ROOT, TYPESCRIPT_CONFIGURATION } from "./paths"
import Environment from "./environment"

export default class PluginArray extends Environment {
	constructor(environment, pathPair) {
		super(environment)

		this.pathPair = pathPair
	}

	/**
	 * Returns array of plugins to be used for PostCSS.
	 */
	get postcssPlugins() {
		return [
			tailwind({
				"config": join(ROOT, "tailwindcss.config.js")
			})
		]
	}

	/**
	 * Returns plugins to insert before the main plugins.
	 */
	get preCompilePlugins() {
		return []
	}

	/**
	 * Returns plugins that takes care most of the compilation.
	 */
	get mainPlugins() {
		const compileTypescript = esbuild([
			{
				"loader": "ts",
				"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
			}
		])
		const compileSvelte = svelte({
			"compilerOptions": {
				"dev": this.isInDevelopment || this.isInTest,
				"hydratable": this.isInProduction
			},
			"preprocess": autoPrepocess({
				"typescript": {
					"tsconfigDirectory": ROOT,
					"tsconfigFile": TYPESCRIPT_CONFIGURATION
				},
				"postcss": {
					"plugins": this.postcssPlugins
				}
			})
		})
		const resolvePathAliases = alias({
			"entries": [
				{ find: /^@(\/|$)/, replacement: `${ROOT}/src/` }
			]
		})
		const handleImages = url({
			"destDir": `${ROOT}/docs`,
			"emitFiles": true,
			"fileName": "[dirname][name][extname]",
			"include": [
				"**/*.png"
			]
		})
		const resolveNodeModules = nodeResolve({
			"browser": this.isInProduction || this.isInDevelopment,
			"exportConditions": [ "svelte" ],
			"extensions": [ ".svelte" ],
			"dedupe": [ "svelte" ]
		})
		const supportCommonjs = commonjs()
		const writeOutput = esbuild([
			{
				"loader": "ts",
				"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
			},
			{
				"loader": "js",
				"output": true
			}
		])

		return [
			compileTypescript,
			compileSvelte,
			resolvePathAliases,
			handleImages,
			resolveNodeModules,
			supportCommonjs,
			writeOutput
		]
	}

	/**
	 * Plugins to insert after the main plugins.
	 */
	get postOutputPlugins() {
		return []
	}

	/**
	 * Combination of pre-compile, main, and post-output plugins.
	 */
	get rawArray() {
		return [
			...this.preCompilePlugins,
			...this.mainPlugins,
			...this.postOutputPlugins
		]
	}
}
