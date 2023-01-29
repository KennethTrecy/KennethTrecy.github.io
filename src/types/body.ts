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
