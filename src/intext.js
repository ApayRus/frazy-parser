import matchAll from 'string.prototype.matchall'

const getRegexIndexes = (text, regex, label) => {
	return [...matchAll(text, regex)].map(elem => {
		const [outerText] = elem
		const { index: startIndex } = elem
		const endIndex = startIndex + outerText.length
		return { label, indexes: [startIndex, endIndex] }
	})
}

/**
 * categorize every peace of text by regex patterns
 * stick a label (its type) to each part of text
 * @param {string} textInput
 * @param {object[]} patterns //  [ { label, regex, parser, replacers } ]
 * @param {string} pattern.label - name for particular block of text
 * @param {string} pattern.regex - regular expression that describes block of text
 * @param {function} pattern.parser - function (text){ returns object or array }
 * @param {function[]} pattern.replacers - array of functions(text){returns text after replacement}
 * @param {string} defaultLabel // for blocks without labels (not match regex)
 * @returns {object[]} [ { label, indexes, text, data } ]
 */
const parseText = (
	textInput,
	patterns,
	defaultLabel = 'uncategorized'
	// display = [ 'indexes', 'text', 'data' ]
) => {
	let array = patterns.reduce((prev, item) => {
		const { regex, label } = item
		const indexes = getRegexIndexes(textInput, regex, label)
		if (label && label !== defaultLabel) {
			return [...prev, ...indexes]
		} else {
			return [...prev]
		}
	}, [])
	// categorized indexes
	const categorizedIndexes = array.sort(
		(a, b) => a['indexes'][0] - b['indexes'][0]
	)

	const uncategorizedIndexes =
		// if there is no categorizedIndexes, all text is uncategorized
		categorizedIndexes.length === 0
			? [
					{
						label: defaultLabel,
						indexes: [0, textInput.length]
					}
			  ]
			: //looking for gaps between categorizedIndexes and collect them as 'uncategorized'
			  categorizedIndexes.reduce((prev, currentItem, index, array) => {
					const [, currentItemEnd] = currentItem.indexes
					const [nextItemStart] = array[index + 1]
						? array[index + 1].indexes
						: [textInput.length]

					if (currentItemEnd + 1 !== nextItemStart && index < array.length) {
						return [
							...prev,
							{
								label: defaultLabel,
								indexes: [currentItemEnd, nextItemStart]
							}
						]
					} else {
						return [...prev]
					}
			  }, [])

	// find  zero element, witch can be lost while reduce
	array = [...categorizedIndexes, ...uncategorizedIndexes].sort(
		(a, b) => a['indexes'][0] - b['indexes'][0]
	)
	const [firstIndex] = array[0].indexes
	if (firstIndex > 0) {
		const zeroElement = {
			label: defaultLabel,
			indexes: [0, firstIndex]
		}
		array.unshift(zeroElement)
	}
	const [, lastIndex] = array[array.length - 1].indexes
	if (lastIndex < textInput.length) {
		const lastElement = {
			label: defaultLabel,
			indexes: [lastIndex, textInput.length]
		}
		array.push(lastElement)
	}

	// ===== return =====
	return array.map(elem => {
		const { label } = elem
		const [startIndex, endIndex] = elem ? elem.indexes : []
		const { parser, replacers = [] } =
			patterns.find(elem => elem.label === label) || {}
		let text = textInput.slice(startIndex, endIndex)
		replacers.forEach(replacer => {
			text = replacer ? replacer(text) : text
		})
		const data = parser ? parser(text) : null
		return { ...elem, text, data }
	})
}

// regexes

export { parseText }
