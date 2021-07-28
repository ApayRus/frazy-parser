import matchAll from 'string.prototype.matchall'
import { parseText } from './intext.js'

// THIS REGEXes and PARSERS is just for example

const mediaRegex = new RegExp(
	/<p>\s*?\[\s*?media\s*?\|\s*?(\S+?)\s*\]\s*?<\/p>/g
)
//general quiz both: () and [] for make ids for them
const quizRegex = new RegExp(/<ul>(\s*<li>[\(\[][\s\S]*?[\]\)][\s\S]+?)<\/ul>/g)

// parsersByType

const quizParser = quizText => {
	const correctAnswers = []
	const firstCheckboxRegex = new RegExp(/<ul>\s*?<li>\s*?\[/)
	const type = quizText.match(firstCheckboxRegex) ? 'multiple' : 'single'
	const variantRegex = new RegExp(/<li>(.+?)<\/li>/g)
	const variantsMatch = [...matchAll(quizText, variantRegex)]
	// inside checkbox or radiobutton
	const answerSignRegex = new RegExp(/^\s*?[\(\[]([\s\S]*?)[\]\)]\s+?/)
	const variants = variantsMatch.map((elem, index) => {
		let [, text] = elem
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

const html = `<p>Question 1. Multiple choice </p>
<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 2. Single choice</p>
<ul>
<li>( ) variant 1</li>
<li>(o) variant 2</li>
<li>( ) variant 3</li>
</ul>
<p>Not a question. Just a list. </p>
<ul>
<li>Item One. </li>
<li>Item two. </li>
<li>Item three. </li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 3. Single choice</p>
<ul>
<li>( ) variant 1</li>
<li>( ) variant 2</li>
<li>(v) variant 3</li>
</ul>
<p>Question 4. Multiple choice </p>
<ul>
<li>[ ] variant 1</li>
<li>[x] variant 2</li>
<li>[ ] variant 3</li>
<li>[x] variant 4</li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 5. Multiple choice as Q1</p>
<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>
<p>Lorem ipsum, dolor sit amet consectetur [[soundedWord]] adipisicing elit. Ducimus, doloremque!</p>`

const quizText = `<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>`

const mediaText = `<p>[media | https://ru.wikipe-dia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%D1%81]</p>`

test.skip('quizParser', () => {
	const quizData = {
		variants: [
			{ text: 'variant 1' },
			{ text: 'variant 2' },
			{ text: 'variant 3' },
			{ text: 'variant 4' }
		],
		correctAnswers: ['0', '2'],
		type: 'multiple'
	}

	expect(quizParser(quizText)).toEqual(quizData)
})

test.skip('inText parser', () => {
	const output = [
		{
			label: 'text',
			indexes: [0, 35],
			text: '<p>Question 1. Multiple choice </p>',
			data: null
		},
		{
			label: 'quiz',
			indexes: [36, 138],
			text:
				'<ul>\n<li>[v] variant 1</li>\n<li>[ ] variant 2</li>\n<li>[v] variant 3</li>\n<li>[ ] variant 4</li>\n</ul>',
			data: {
				variants: [
					{ text: 'variant 1' },
					{ text: 'variant 2' },
					{ text: 'variant 3' },
					{ text: 'variant 4' }
				],
				correctAnswers: ['0', '2'],
				type: 'multiple'
			}
		},
		{
			label: 'media',
			indexes: [139, 166],
			text: '<p>[media | pathToFile]</p>',
			data: {
				path: 'pathToFile'
			}
		},
		{
			label: 'text',
			indexes: [167, 199],
			text: '<p>Question 2. Single choice</p>',
			data: null
		},
		{
			label: 'quiz',
			indexes: [200, 279],
			text:
				'<ul>\n<li>( ) variant 1</li>\n<li>(o) variant 2</li>\n<li>( ) variant 3</li>\n</ul>',
			data: {
				variants: [
					{ text: 'variant 1' },
					{ text: 'variant 2' },
					{ text: 'variant 3' }
				],
				correctAnswers: ['1'],
				type: 'single'
			}
		},
		{
			label: 'text',
			indexes: [280, 389],
			text:
				'<p>Not a question. Just a list. </p>\n<ul>\n<li>Item One. </li>\n<li>Item two. </li>\n<li>Item three. </li>\n</ul>',
			data: null
		},
		{
			label: 'media',
			indexes: [390, 417],
			text: '<p>[media | pathToFile]</p>',
			data: {
				path: 'pathToFile'
			}
		},
		{
			label: 'text',
			indexes: [418, 450],
			text: '<p>Question 3. Single choice</p>',
			data: null
		},
		{
			label: 'quiz',
			indexes: [451, 530],
			text:
				'<ul>\n<li>( ) variant 1</li>\n<li>( ) variant 2</li>\n<li>(v) variant 3</li>\n</ul>',
			data: {
				variants: [
					{ text: 'variant 1' },
					{ text: 'variant 2' },
					{ text: 'variant 3' }
				],
				correctAnswers: ['2'],
				type: 'single'
			}
		},
		{
			label: 'text',
			indexes: [531, 566],
			text: '<p>Question 4. Multiple choice </p>',
			data: null
		},
		{
			label: 'quiz',
			indexes: [567, 669],
			text:
				'<ul>\n<li>[ ] variant 1</li>\n<li>[x] variant 2</li>\n<li>[ ] variant 3</li>\n<li>[x] variant 4</li>\n</ul>',
			data: {
				variants: [
					{ text: 'variant 1' },
					{ text: 'variant 2' },
					{ text: 'variant 3' },
					{ text: 'variant 4' }
				],
				correctAnswers: ['1', '3'],
				type: 'multiple'
			}
		},
		{
			label: 'media',
			indexes: [670, 697],
			text: '<p>[media | pathToFile]</p>',
			data: {
				path: 'pathToFile'
			}
		},
		{
			label: 'text',
			indexes: [698, 738],
			text: '<p>Question 5. Multiple choice as Q1</p>',
			data: null
		},
		{
			label: 'quiz',
			indexes: [739, 841],
			text:
				'<ul>\n<li>[v] variant 1</li>\n<li>[ ] variant 2</li>\n<li>[v] variant 3</li>\n<li>[ ] variant 4</li>\n</ul>',
			data: {
				variants: [
					{ text: 'variant 1' },
					{ text: 'variant 2' },
					{ text: 'variant 3' },
					{ text: 'variant 4' }
				],
				correctAnswers: ['0', '2'],
				type: 'multiple'
			}
		},
		{
			label: 'text',
			data: null,
			indexes: [842, 942],
			text:
				'<p>Lorem ipsum, dolor sit amet consectetur <intext text="soundedWord" path=""></intext> adipisicing elit. Ducimus, doloremque!</p'
		}
	]

	expect(
		parseText(
			html,
			[
				{ label: 'media', regex: mediaRegex, parser: mediaParser },
				{ label: 'quiz', regex: quizRegex, parser: quizParser },
				{ label: 'text', replacers: [inTextSoundedWordReplacer] }
			],
			'text'
		)
	).toEqual(output)
})
