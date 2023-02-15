/**
 * @module
 * Do not add here anymore. If there are still files refererring to the types in this module, move
 * them to `./container_info.ts`
 */

/**
 * @deprecated since v2.2.0. Use the type in container info instead.
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

/**
 * @deprecated since v2.2.0. Use the type in container info instead.
 */
export type Order =
	| "ascending"
	| "descending"
	| "unordered"
