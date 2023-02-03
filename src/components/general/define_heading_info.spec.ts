import { describe, it, expect } from "vitest"

import type { HeadingInfo } from "@/types/body"

import defineHeadingInfo from "./define_heading_info"

describe("Define heading info behavior", function() {
	it("can set ID base from space-delimited text", function() {
		const rawInfo: HeadingInfo = {
			"text": "Hello world"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello_world")
	})

	it("can set ID base from hypen-delimited text", function() {
		const rawInfo: HeadingInfo = {
			"text": "Hello-world"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello-world")
	})

	it("can respect set ID", function() {
		const rawInfo: HeadingInfo = {
			"text": "Hello world",
			"id": "hello"
		}

		const info = defineHeadingInfo(rawInfo)

		expect(info.id).toStrictEqual("hello")
	})
})
