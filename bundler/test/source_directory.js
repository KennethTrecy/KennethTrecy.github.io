import { basename, extname } from "node:path"

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
		const inputPath = basename(pathPair.originalRelativeInputPath)
		const firstExtension = extname(inputPath)
		if (firstExtension === ".ts") {
			const secondExtension = extname(basename(inputPath, firstExtension))

			return secondExtension === ".spec"
		}

		return false
	}
}
