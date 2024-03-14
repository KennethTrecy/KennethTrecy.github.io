import { describe, expect, it } from "vitest"

import { type HeadingInfo } from "@/types/container_info"

import defineHeadingInfo from "./define_heading_info"

describe("Define heading info behavior", () => {
	it("can set ID base from space-delimited text", () => {
		const rawInfo: HeadingInfo = {
			"text": "Hello world"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello_world")
	})

	it("can set ID base from hypen-delimited text", () => {
		const rawInfo: HeadingInfo = {
			"text": "Hello-world"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello-world")
	})

	it("can respect set ID", () => {
		const rawInfo: HeadingInfo = {
			"text": "Hello world",
			"id": "hello"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello")
	})
})
