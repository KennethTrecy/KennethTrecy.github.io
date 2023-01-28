import { describe, it, expect } from "vitest"

import Class from "./page_meta"

describe("Page meta class behavior", function() {
	it("can clean raw path", function() {
		const instance = new Class("src/route/index")

		const data = instance.path

		expect(data).to.equal("index")
	})

	it("can default version to 0.1", function() {
		const instance = new Class(import.meta.url)

		const data = instance.version

		expect(data).to.equal("0.1")
	})

	it("can default version to 0.1", function() {
		const instance = new Class(import.meta.url)

		const data = instance.version

		expect(data).to.equal("0.1")
	})

	it("can default published date to current date", function() {
		const instance = new Class(import.meta.url)

		const data = instance.datePublished

		const currentDate = new Date()
		expect(data.getDate()).to.equal(currentDate.getDate())
		expect(data.getMonth()).to.equal(currentDate.getMonth())
		expect(data.getFullYear()).to.equal(currentDate.getFullYear())
	})

	it("can default to last modified date to published date", function() {
		const datePublished = new Date()
		const instance = new Class(import.meta.url, { datePublished })

		const data = instance.dateModified

		expect(data).to.equal(datePublished)
	})
})
