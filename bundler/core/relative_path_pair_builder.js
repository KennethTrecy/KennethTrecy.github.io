import { RelativePathPairBuilder as NativeRelativePathPairBuilder } from "comroconbu"

import RelativePathPair from "./relative_path_pair"

export default class RelativePathPairBuilder extends NativeRelativePathPairBuilder {
	build(inputPath, outputPath) {
		return new RelativePathPair(this._commonInfo, inputPath, outputPath)
	}
}
