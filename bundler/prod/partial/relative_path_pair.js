import { join } from "node:path"

import { ROOT } from "../../core/paths"

import { RelativePathPair as NativeRelativePathPair } from "comroconbu"

export default class RelativePathPair extends NativeRelativePathPair {
	get completeInputPath() {
		return join(ROOT, "bundler/prod/partial/render.ts")
	}

	get completeOutputPath() {
		return this.originalCompleteOutputPath.replace(".svelte", ".js")
	}
}
