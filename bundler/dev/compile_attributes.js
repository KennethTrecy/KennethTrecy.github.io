export default function compileAttributes(attributes) {
	const parsedAttributes = []
	for (const name in attributes) {
		if (Object.hasOwnProperty.call(attributes, name)) {
			const value = attributes[name];
			parsedAttributes.push(`${name}="${value}"`)
		}
	}

	return parsedAttributes.join(" ")
}
