/**
 * @module
 * Do not add here anymore. If there are still files refererring to the types in this module, move
 * them to `./container_info.ts`
 */

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

export type SubheadingVariant =
	| "raw"
	| "name"
	| "headline"

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

export interface CodeFile {
	viewURL: string
	sha: string
	size: number
	content: string
}

export type CompleteCodeFileInfo = CodeFile & CompleteViewableFileInfo

interface CommandOutput {
	text: string
}

interface ExecutedCommandInfo {
	command: string
	output: CommandOutput[]
}

export interface ExecutedCommandSetInfo {
	description: string,
	commands: ExecutedCommandInfo[]
}

export type ListVariant =
	| "normal"
	| "project"
	| "card"

export type AnchorTarget = "self" | "other"

export type AnchorLinkType =
	| "nofollow"
	| "external"
	| "noopener"
	| "opener"
	| "bookmark"
	| "me"
	| "author"
