import type { HeadingInfo } from "@/types/body"

export default function({
	prefix,
	text,
	id = text.replace(/ /g, "_").toLocaleLowerCase()
}: HeadingInfo<"raw">): HeadingInfo<"defined"> {
	return {
		prefix,
		text,
		id
	}
}
