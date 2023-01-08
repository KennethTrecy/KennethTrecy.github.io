import { RelativePathPair as NativeRelativePathPair } from "comroconbu"

export default class RelativePathPair extends NativeRelativePathPair {
	get completeOutputPath() {
		return this.originalCompleteOutputPath.replace(".ts", ".js")
	}
}
