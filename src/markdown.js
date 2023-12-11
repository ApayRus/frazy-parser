/* 
The idea is to parse markdown text into typed blocks, witch we can parse later in different ways. 
So you can write content as a text, and then use it as a collection of advanced data models, instead of json. 

MD header can have 1 of 3 roles: 
1) header of a material unit with type (rich media, file card, rich text, exercise )
2) super header for set of typed materials 
3) an ordinary header inside text block 

AN ALGORITHM 

1. SPLIT TEXT BY H1 (#) without any conditions 

A first block is a general info about an app for a cover (home page): 
title, author, level, published etc 

2. TRAVERSE H1 BLOCKS (from 2nd)

	1) If h1 block has type (richText, richMedia), it means that:
		we are also on contentType level and should parse it immediately:
			don't find any more h2 (##) blocks
			run contentType parser 

	2) Else we split h1 block into h2 blocks. 
		Then we traverse h2 blocks and run parser for each of them 
*/

import matchAll from 'string.prototype.matchall'
import { input as inputText } from '../tests/markdown/markdown.js'

/**
 *
 * @param {number} index
 * @returns {string}
 * @example
 * prefixedIndex(1) // '001'
 * prefixedIndex(45) // '045'
 * prefixedIndex(123) // '123'
 */
export const prefixedIndex = (index = 0) => {
	return index.toString().padStart(3, '0')
}

export const splitMarkdownIntoPartsByTemplate = (text, template) => {
	const matches = [...matchAll(text, template)]
	if (!matches) return [{ content: text }]

	const splitParts = matches.map((elem, index, array) => {
		const nextElem = array[index + 1] || {}
		const nextIndex = nextElem.index || text.length
		const [headerText, title = '', , typeString = ''] = elem
		const [type, ...params] = typeString.split('|').map(elem => elem.trim())
		const { index: curIndex, input } = elem
		const content = input
			.slice(curIndex, nextIndex)
			.replace(headerText, '')
			.trim()
		return {
			title,
			type,
			params,
			content
		}
	})

	return splitParts
}

/**
 * checks is paragraph text is yaml params or not
 * if not - returns null
 * if yes - returns object of params
 *
 * @param {string} paragraphText
 */
export const yamlParams = paragraphText => {
	const lines = paragraphText.trim().split('\n')
	const matches = [...matchAll(paragraphText, /^(.+?):\s*(.+?)$/gm)]
	if (!matches) return null
	if (matches.length !== lines.length) return null

	const yamlParams = matches.reduce((prev, item) => {
		const [, key, value] = item
		return { ...prev, [key]: value }
	}, {})

	return yamlParams
}

const h1template = new RegExp(/^\s*#{1}\s+(.+?)\s*(\{(.+?)\})?\s*$/, 'gm')
const h2template = new RegExp(/^\s*#{2}\s+(.+?)\s*(\{(.+?)\})?\s*$/, 'gm')
const h3template = new RegExp(/^\s*#{3}\s+(.+?)\s*(\{(.+?)\})?\s*$/, 'gm')

const parseMarkdown = (markdownText, h1template, h2template) => {
	const chaptersArray = splitMarkdownIntoPartsByTemplate(
		markdownText,
		h1template
	)

	const infoBlock = chaptersArray.shift()
	const { title, content: infoContent = '' } = infoBlock || {}

	const paramsArray =
		infoContent?.split('\n\n').map(elem => elem.split('\n')) || []
	// array of arrays with extra info, that we can put in different parts of Home page (app-cover)

	const info = { title, paramsArray }

	const content = chaptersArray // chaptersAndSubchapters
		.map((chapterDoc, chapterIndex) => {
			const id = prefixedIndex(chapterIndex + 1)
			// we shouldn't find subchapters if:
			// 1) type is set => it's end point content (contentType)
			// 2) chapter hasn't subchapters
			if (chapterDoc.type || !chapterDoc.content.trim()) {
				const content = chapterDoc

				return { ...content, id }
			} else {
				const subchaptersRaw = splitMarkdownIntoPartsByTemplate(
					chapterDoc.content,
					h2template
				)
				const introText = subchaptersRaw?.[0]?.introText

				let additionalParams = {}
				if (introText) {
					subchaptersRaw.shift()
					additionalParams = yamlParams(introText)
				}

				const subchapters = subchaptersRaw.map(
					(subchapterDoc, subchapterIndex) => {
						const id = prefixedIndex(subchapterIndex + 1)
						return { id, content: subchapterDoc }
					}
				)

				return {
					...chapterDoc,
					...additionalParams,
					content: subchapters,
					id
				}
			}
		})
	let hiddenContent = []
	const hiddenSectionStartIndex = content.findIndex(
		elem =>
			elem.title.trim().toLowerCase() === 'hidden' &&
			elem.type.toLowerCase() === 'section'
	)

	if (hiddenSectionStartIndex >= 0) {
		hiddenContent = content.splice(hiddenSectionStartIndex)
		hiddenContent.shift() // remove # Hidden string
		hiddenContent = hiddenContent.map(elem => {
			const id = prefixedIndex(elem.id - content.length - 1)
			return { ...elem, id }
		})
	}
	return { info, content, hiddenContent }
}

const x = parseMarkdown(inputText, h1template, h2template)

// console.log(JSON.stringify(x, null, 2))
const y = splitMarkdownIntoPartsByTemplate(inputText, h1template)
console.log(JSON.stringify(y, null, 2))
