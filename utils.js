/**
 *
 * @param {number} index
 * @returns {string} prefixedIndex
 * @example
 * prefixedIndex(1) // '001'
 * prefixedIndex(45) // '045'
 * prefixedIndex(123) // '123'
 */
const prefixedIndex = index => {
	return index.toString().padStart(3, '0')
}

export { prefixedIndex }
