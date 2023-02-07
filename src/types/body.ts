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

export interface PartialViewableRepoInfo {
	repo: string
	paths: string[]
}

export interface PartialViewableOwnerInfo {
	owner: string
	repo: PartialViewableRepoInfo[]
}

export interface CompleteViewableFileInfo {
	owner: string
	repo: string
	path: string
}
