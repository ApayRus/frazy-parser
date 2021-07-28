// *** VTT ADVANCED PARSER (with INFO, CHAPTERS, COMMENTS, etc) *** //

import matchAll from 'string.prototype.matchall'
import { cueTemplates } from './subtitles.js'
import { parseTimecode, extractVoiceTags, parseYamlParams } from './utils.js'

const vttInfoTemplate = /^webvtt *-? *(.+)*[\n\r]([\s\S]+?)[\n\r]{2}/gim // first block of document

const vttChapterTemplate = /^note chapter\s*[\n\r]([\s\S]+?)[\n\r]{2}/gim

const vttCommentTemplate = /^note comment\s*[\n\r]([\s\S]+?)[\n\r]{2}/gim

const parseVttCueMatchElem = (elem, id, extractVoices = true) => {
	const indexes = { identifier: 1, start: 2, end: 3, body: 4 }
	const identifier =
		indexes.identifier && elem[indexes.identifier]
			? elem[indexes.identifier].trim()
			: ''
	const start = parseTimecode(elem[indexes.start])
	const end = parseTimecode(elem[indexes.end])
	const body = extractVoices
		? extractVoiceTags(elem[indexes.body])
		: elem[indexes.body]
	const currentSub = { id, identifier, start, end, body }
	if (!identifier) delete currentSub.identifier
	if (!start && start !== 0) delete currentSub.start
	if (!end && end !== 0) delete currentSub.end
	return currentSub
}

/**
 *
 * @param {*} matchElem - is array after text.match
 * @returns object
 */
const parseCommentMatchElem = matchElem => {
	const [, text] = matchElem
	return { text }
}

const parseInfoMatchElem = matchElem => {
	const [, topTitle, text] = matchElem
	return { topTitle, ...parseYamlParams(text) }
}

/**
 *
 * @param {*} matchElem - is array after text.match
 * @returns object
 */
const parseChapterMatchElem = matchElem => {
	const [, chapterText] = matchElem
	const parsedChapter = parseYamlParams(chapterText)
	let { start, end } = parsedChapter
	start = parseTimecode(start)
	end = parseTimecode(end)
	if (start) parsedChapter.start = start
	if (end) parsedChapter.end = end
	return { ...parsedChapter }
}

// deprecated, use parseVtt.filter type === 'chapter'
// vtt supports comments, that is lines begin from NOTE
// we use them to put chapters info inside subs file
// for examples look at tests/subtitles/vttParseChapters.test.js
const parseChapters = text => {
	const chaptersMatch = [...text.matchAll(vttChapterTemplate)]
	const chapters = chaptersMatch.map(elem => parseChapterMatchElem(elem))
	return chapters
}

/**
 * Advanced parser, to extract not only phrases, but also info, chapters, and comments
 */
const parseVtt = text => {
	const textArray = text.trim().split(/[\n\r]{2}/)
	// all regex templates are 'gmi'
	// global => then we use matchAll
	// multiline => then we add '\n\n'
	let cueId = 0
	return textArray.map(elem => {
		let [matchElem] = [...matchAll(elem + '\n\n', vttInfoTemplate)]
		if (matchElem) {
			return { type: 'info', ...parseInfoMatchElem(matchElem) }
		}

		;[matchElem] = [...matchAll(elem + '\n\n', vttChapterTemplate)]
		if (matchElem) {
			return { type: 'chapter', ...parseChapterMatchElem(matchElem) }
		}

		;[matchElem] = [...matchAll(elem + '\n\n', cueTemplates.vtt)]
		if (matchElem) {
			cueId++
			return { type: 'cue', ...parseVttCueMatchElem(matchElem, cueId) }
		}

		;[matchElem] = [...matchAll(elem + '\n\n', vttCommentTemplate)]
		if (matchElem)
			return { type: 'comment', ...parseCommentMatchElem(matchElem) }

		//else
		return { type: 'unknown', text: elem }
	})
}

export { parseVtt, parseChapters }
