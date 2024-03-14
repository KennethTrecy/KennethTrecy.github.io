import { type HeadingInfo } from "@/types/container_info"

export default function({
	prefix,
	text,
	id = text.replace(/ /gu, "_").toLocaleLowerCase()
}: HeadingInfo<"raw">): HeadingInfo<"defined"> {
	return {
		prefix,
		text,
		id
	}
}
