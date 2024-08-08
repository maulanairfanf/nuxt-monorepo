export const toUpperCase = text => {
	if (typeof text !== 'string') {
		throw new Error('Input must be a string')
	}
	return text.toUpperCase()
}

export const toLowerCase = text => {
	if (typeof text !== 'string') {
		throw new Error('Input must be a string')
	}
	return text.toLowerCase()
}
