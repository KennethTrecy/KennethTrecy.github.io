import { join, basename } from "path"
import scss from "rollup-plugin-scss"
import alias from "@rollup/plugin-alias"
import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import esbuild from "rollup-plugin-esbuild-transform"
import { CommonInfoBuilder } from "comroconbu"

import { PRODUCTION, DEVELOPMENT, TEST } from "./environments"

import listPath from "./list_path"
import RelativePathPairBuilder from "./relative_path_pair_builder"

const ROOT = join(__dirname, "../..")
const TYPESCRIPT_CONFIGURATION = "tsconfig.json"

export default async function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const compileTypescript = esbuild([
		{
			"loader": "ts",
			"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
		}
	])
	const compileSvelte = svelte({
		"compilerOptions": {
			"dev": environment === DEVELOPMENT || environment === TEST
		},
		"preprocess": autoPrepocess({
			"typescript": {
				"tsconfigDirectory": ROOT,
				"tsconfigFile": TYPESCRIPT_CONFIGURATION
			}
		})
	})
	const resolvePathAliases = alias({
		"entries": [
			{ find: /^@(\/|$)/, replacement: `${ROOT}/src/` }
		]
	})
	const resolveNodeModules = nodeResolve({
		"browser": environment === PRODUCTION || environment === DEVELOPMENT,
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
	const commonInfoBuilder = new CommonInfoBuilder("src/pages", "docs", "iife")

	const sourceDirectory = commonInfoBuilder.configureSourceDirectory(
		pathPair => {
			return [
				alias({
					"entries": [
						{
							find: /^page/,
							replacement: join(ROOT, pathPair.originalCompleteInputPath)
						}
					]
				}),
				compileTypescript,
				compileSvelte,
				scss({
					"fileName": basename(pathPair.originalRelativeOutputPath).replace(".svelte", ".css")
				}),
				resolvePathAliases,
				resolveNodeModules,
				supportCommonjs,
				writeOutput,
				...generalPostPlugins
			]
		},
		[],
		new RelativePathPairBuilder(commonInfoBuilder.commonInfo)
	)

	return environment === TEST
	? [
		{
			"input": "src/app.spec.ts",
			"output": {
				"file": "hidden/t/app.spec.js",
				"format": "cjs",
				"interop": "auto",
				"name": "tests"
			},
			"external": [ "jsdom" ],
			"plugins": [
				alias({
					"entries": [
						{ find: /^page/, replacement: `${ROOT}/src/pages/index.svelte` }
					]
				}),
				compileTypescript,
				compileSvelte,
				scss({

				}),
				resolvePathAliases,
				resolveNodeModules,
				supportCommonjs,
				writeOutput,
				...generalPostPlugins
			]
		}
	]
	: sourceDirectory.toConfigurationArray()
}
