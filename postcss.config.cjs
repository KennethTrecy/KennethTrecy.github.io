const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

const configuration = {
	plugins: [
		tailwindcss({
			"config": "./tailwindcss.config.cjs"
		}),
		autoprefixer({
			cascade: true
		})
	],
}

module.exports = configuration
