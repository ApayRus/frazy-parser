// import matchAll from "string.prototype.matchall";

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
			indexes: [0, firstIndex - 1]
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
	console.log('lastIndex', lastIndex)

	// ===== return =====
	return array.map(elem => {
		const { label } = elem
		const [startIndex, endIndex] = elem ? elem.indexes : []
		const { parser, replacers = [] } =
			patterns.find(elem => elem.label === label) || {}
		let text = textInput.slice(startIndex, endIndex)
		console.log('text', text)
		replacers.forEach(replacer => {
			text = replacer ? replacer(text) : text
		})
		const data = parser ? parser(text) : null
		return { ...elem, text, data }
	})
}

// regexes

const mediaRegex = new RegExp(
	/<p>\s*?\[\s*?media\s*?\|\s*?(\S+?)\s*\]\s*?<\/p>/g
)
//general quiz both: () and [] for make ids for them
const quizRegex = new RegExp(/<ul>(\s*<li>[\(\[][\s\S]*?[\]\)][\s\S]+?)<\/ul>/g)

const getRegexIndexes = (text, regex, label) => {
	return [...text.matchAll(regex)].map(elem => {
		const [outerText] = elem
		const { index: startIndex } = elem
		const endIndex = startIndex + outerText.length
		return { label, indexes: [startIndex, endIndex] }
	})
}

// parsersByType

const quizParser = quizText => {
	const correctAnswers = []
	const firstCheckboxRegex = new RegExp(/<ul>\s*?<li>\s*?\[/)
	const type = quizText.match(firstCheckboxRegex) ? 'multiple' : 'single'
	const variantRegex = new RegExp(/<li>(.+?)<\/li>/g)
	const variantsMatch = [...quizText.matchAll(variantRegex)]
	// inside checkbox or radiobutton
	const answerSignRegex = new RegExp(/^\s*?[\(\[]([\s\S]*?)[\]\)]\s+?/)
	const variants = variantsMatch.map((elem, index) => {
		let [, text] = elem
		// console.log(text);
		const [, answerSign = ''] = text.match(answerSignRegex)
		if (answerSign.trim()) {
			correctAnswers.push(index)
		}
		text = text.replace(answerSignRegex, '')
		return { text }
	})

	return { variants, correctAnswers, type }
}

const mediaParser = mediaText => {
	const mediaRegex = new RegExp(/\[\s*?media\s*?\|\s*?(\S+?)\s*\]/)
	const mediaMatch = mediaText.match(mediaRegex)
	const [, path] = mediaMatch
	return { path }
}

/**
 *
 * @param {string} htmlText - multiline text
 * @returns {string}
 * @example
 * const exampleText = 'There is some text with [[ sounded word ]] or [[sounded phrase | path to file]]'
 * convertInTextShortcutIntoTags(exampleText)
 * // 'There is some text with <inText text="sounded word" path="" /> or <inText text="sounded phrase" path="path to file" />'
 * // () ===> <inText text="some text" path="path to file" />
 */
const inTextSoundedWordReplacer = htmlText => {
	// [[ sounded word ]] or [[sounded phrase | path to file]]
	const inTextSoundedWordRegex = new RegExp(
		/\[\[\s*(.+?)\s*(\|\s*(.+?)\s*)?\]\]/gm
	)
	return htmlText.replace(
		inTextSoundedWordRegex,
		'<intext text="$1" path="$3"></intext>'
	)
}

export {
	parseText,
	quizParser,
	mediaParser,
	mediaRegex,
	quizRegex,
	inTextSoundedWordReplacer
}
