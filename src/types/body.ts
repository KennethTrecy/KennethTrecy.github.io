export type HeadingInfo<T extends "defined"|"raw" = "raw"> = {
	prefix?: string
	text: string
} & (
	T extends "defined"
	? { id: string }
	: T extends "raw"
		? { id?: string }
		: never
)

export type Order =
	| "ascending"
	| "descending"
	| "unordered"

interface ViewableBranchInfoTree {
	branch: string
	paths: string[]
}

interface ViewableRepoInfoTree {
	repo: string
	branches: ViewableBranchInfoTree[]
}

export interface ViewableOwnerInfoTree {
	owner: string
	repos: ViewableRepoInfoTree[]
}

export interface CompleteViewableFileInfo {
	owner: string
	repo: string
	branch: string
	path: string
}
