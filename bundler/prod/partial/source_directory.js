import { extname } from "node:path"

import { SourceDirectory as NativeSourceDirectory, CommonInfo } from "comroconbu"

import RelativePathPair from "./relative_path_pair"

export default class SourceDirectory extends NativeSourceDirectory {
	/**
	 * @param {CommonInfo} commonInfo
	 * @param {string} inputPath
	 */
	buildPathPair(commonInfo, inputPath) {
		return new RelativePathPair(commonInfo, inputPath, inputPath)
	}

	/**
	 * @param {RelativePathPair} pathPair the pair of I/O paths to be evalauted.
	 */
	shouldBeIncluded(pathPair) {
		return extname(pathPair.originalRelativeInputPath) === ".svelte"
	}
}
