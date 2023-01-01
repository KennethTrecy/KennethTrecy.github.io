import { join, basename } from "path"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import { CommonInfoBuilder } from "comroconbu"
import purgecss from "@fullhuman/postcss-purgecss"

import url from "@rollup/plugin-url"
import html from "@rollup/plugin-html"
import alias from "@rollup/plugin-alias"
import svelte from "rollup-plugin-svelte"
import postcss from "rollup-plugin-postcss"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import esbuild from "rollup-plugin-esbuild-transform"

import { PRODUCTION, DEVELOPMENT, TEST } from "./environments"

import listPath from "./list_path"
import RelativePathPairBuilder from "./relative_path_pair_builder"

const ROOT = join(__dirname, "../..")
const TYPESCRIPT_CONFIGURATION = "tsconfig.json"

export default async function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const postcssConfigurationPath = join(ROOT, "postcss.config.json")
	const compileTypescript = esbuild([
		{
			"loader": "ts",
			"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
		}
	])
	const postcssPlugins = [
		tailwind({
			"config": join(ROOT, "tailwindcss.config.js")
		}),
		autoprefixer()
	]
	const compileSvelte = svelte({
		"compilerOptions": {
			"dev": environment === DEVELOPMENT || environment === TEST
		},
		"preprocess": autoPrepocess({
			"typescript": {
				"tsconfigDirectory": ROOT,
				"tsconfigFile": TYPESCRIPT_CONFIGURATION
			},
			"postcss": {
				"plugins": postcssPlugins
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
				resolvePathAliases,
				handleImages,
				resolveNodeModules,
				supportCommonjs,
				writeOutput,
				postcss({
					"extract": basename(pathPair.originalRelativeOutputPath).replace(".svelte", ".css"),
					"plugins": [
						...postcssPlugins,
						purgecss({
							"content": [
								pathPair.completeOutputPath
							]
						})
					]
				}),
				html({
					"fileName": basename(pathPair.originalRelativeOutputPath).replace(".svelte", ".htm")
				}),
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
