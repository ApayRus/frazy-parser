import matchAll from 'string.prototype.matchall'
import { prefixedIndex } from '../utils.js'

// cueTemplates play 2 roles:
// 1) check subs type
// 2) extract data from it: identifier, start, end, body
const cueTemplates = {
	srt: /^(\d+\s+)(\d\d:\d\d:\d\d,\d\d\d)\s+-->\s+(\d\d:\d\d:\d\d,\d\d\d)\s+([\s\S]+?)[\n\r]{2}/gm,
	vtt: /^(.+[\n\r])?(\d?\d?:?\d\d:\d\d\.\d\d\d)\s+-->\s+(\d?\d?:?\d\d:\d\d\.\d\d\d).*?[\n\r]([\s\S]+?)[\n\r]{2}/gm,
	ass: /^(\d?\d:\d\d:\d\d\.\d\d),(\d?\d:\d\d:\d\d\.\d\d) (.+?)$/gm,
	audacity: /^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)$/gm // a little tricky, because floating part is optional
}

const positionInCueTemplate = {
	srt: { identifier: 1, start: 2, end: 3, body: 4 },
	vtt: { identifier: 1, start: 2, end: 3, body: 4 },
	audacity: { start: 1, end: 3, body: 5 },
	ass: { start: 1, end: 2, body: 3 },
	unknown: { body: 0 }
}

const checkSubsType = text => {
	for (const subsType in cueTemplates) {
		const cueTemplate = cueTemplates[subsType]
		if (text.match(cueTemplate)?.length > 0) {
			return subsType
		}
	}

	return 'unknown'
}

/**
 * works for VTT, SRT, Audacity
 * @param {string} text
 * @param {boolean} extractVoices - true by default. voice is webvtt <v> tag. 
 * @returns {object} phrasesObject
 * @returns {string} phrasesObject.identifier
 * @returns {number} phrasesObject.start
 * @returns {number} phrasesObject.end
 * @returns {object[]} phrasesObject.body - array of objects
 * @example
	const phrases = {
		'001': {
			identifier: 1,
			start: 0.2,
			end: 5.32,
			body: [
				{ text: 'bla bla' },
				{
					voice: {
						name: 'Jhon Lenin',
						classes: ['laud', 'kindly']
					},
					text: 'ha ha ha'
				}
			]
		}
	}
 */
const parseSubs = (text, extractVoices = true) => {
	const subsType = checkSubsType(text)
	const indexes = positionInCueTemplate[subsType]
	const arrayOfMatches =
		subsType === 'unknown'
			? text.split('\n').map(elem => [elem]) // useful for translations to subs, without timing
			: [...matchAll(text + '\n\n', cueTemplates[subsType])]

	const subsObject = arrayOfMatches.reduce((prev, item, index) => {
		const identifier = item?.[indexes?.identifier]?.trim() || ''
		const start = parseTimecode(item?.[indexes?.start])
		const end = parseTimecode(item?.[indexes?.end])
		const body = extractVoices
			? extractVoiceTags(item?.[indexes?.body])
			: item?.[indexes?.body]
		const currentSub = { identifier, start, end, body }
		if (!identifier) delete currentSub.identifier
		if (!start) delete currentSub.start
		if (!end) delete currentSub.end
		return {
			...prev,
			[prefixedIndex(index + 1)]: currentSub
		}
	}, {})
	return subsObject
}

/**
 * works for SRT, VTT, ASS
 * @param {string} timecode like `00:00:00.500` or `00:00.500` (hours is optional)
 * @returns {number} seconds like 1234.567
 * @example
 * parseTime('00:00:00.500') // 0.5
 */
const parseTimecode = timecode => {
	if (!timecode) return null
	const number = Number(timecode)
	if (number >= 0) return number
	if (typeof timecode === 'string') {
		const timeArray = timecode.replace(',', '.').split(':').reverse()
		//reverse because 'hours' is optional and good if it at the end of array
		const [seconds, minutes, hours = '0'] = timeArray
		const timeNumber = +seconds + +minutes * 60 + +hours * 60 * 60
		return timeNumber
	}
}

const extractVoiceTags = cueText => {
	const voiceRegex = new RegExp(/<v(\S+?)?\s+?(.+?)>([\s\S]+?)(<\/v>|$)/g)
	const matches = [...matchAll(cueText, voiceRegex)]
	if (!matches.length) return [{ text: cueText }]
	else {
		const result = matches.reduce((prevItem, currentItem, index, array) => {
			const [matchString, classesString = '', name, text = ''] = currentItem
			const { index: indexStartCurrent, input } = currentItem
			const indexEndCurrent = indexStartCurrent + matchString.length
			const classes = classesString
				? classesString.trim().slice(1).split('.')
				: []
			const { index: indexStartNext } = array[index + 1] || input.length
			const curObj = [
				{
					voice: {
						name,
						classes
					},
					text: text.trim()
				}
			]
			if (indexEndCurrent < indexStartNext) {
				const text = input.slice(indexEndCurrent, indexStartNext).trim() // between voices, without voice tag,
				if (text) curObj.push({ text })
			}
			return [...prevItem, ...curObj]
		}, [])

		const textBeforeVoiceTags = () => {
			const { index: firstVoiceStartPosition } = matches[0]
			const text = cueText.slice(0, firstVoiceStartPosition).trim()
			return firstVoiceStartPosition > 0 && text ? [{ text }] : []
		}

		const textAfterVoiceTags = () => {
			const lastVoiceMatch = matches[matches.length - 1]
			const { index: lastVoiceStartPosition } = lastVoiceMatch
			const [matchString = ''] = lastVoiceMatch
			const lastVoiceEndPosition = lastVoiceStartPosition + matchString.length
			const text = cueText.slice(lastVoiceEndPosition, cueText.length).trim()
			return lastVoiceEndPosition < cueText.length && text ? [{ text }] : []
		}

		return [...textBeforeVoiceTags(), ...result, ...textAfterVoiceTags()]
	}
}

export { parseSubs, parseTimecode, checkSubsType, extractVoiceTags }
