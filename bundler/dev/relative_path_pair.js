import { join } from "node:path"

import { RelativePathPair as NativeRelativePathPair } from "comroconbu"

export default class RelativePathPair extends NativeRelativePathPair {
	get completeInputPath() {
		return join(this._commonInfo.inputDirectory, "../page_template.ts")
	}

	get completeOutputPath() {
		return this.originalCompleteOutputPath.replace(".svelte", ".js")
	}
}
