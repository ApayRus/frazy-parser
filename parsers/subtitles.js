import matchAll from 'string.prototype.matchall'
import { prefixedIndex } from '../utils.js'

/**
 * works for SRT, VTT, ASS
 * @param {string} timecode like `00:00:00.500` or `00:00.500` (hours is optional)
 * @returns {number} seconds like 1234.567
 * @example
 * parseTime('00:00:00.500') // 0.5
 */
const parseTimecode = timecode => {
	if (!timecode) return null
	const timeArray = timecode.replace(',', '.').split(':').reverse()
	//reverse because 'hours' is optinal and good if it at the end of array
	const [seconds, minutes, hours = '0'] = timeArray
	const timeNumber = +seconds + +minutes * 60 + +hours * 60 * 60
	return timeNumber
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

const checkSubsType = text => {
	const vttAttribute = new RegExp(/^WEBVTT/)
	const srtAttribute = new RegExp(/^\d\s+\d\d:\d\d:\d\d,\d\d\d/)
	const audacityAttribute = new RegExp(
		/^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)/
	)

	const { length: vttMatch } = text.match(vttAttribute) || []
	const { length: srtMatch } = text.match(srtAttribute) || []
	const { length: audacityMatch } = text.match(audacityAttribute) || []

	if (vttMatch) return 'vtt'
	if (srtMatch) return 'srt'
	if (audacityMatch) return 'audacity'
	return 'unknown'
}

const parseSrtVtt = subsText => {
	/*
Difference srt|vtt cue template:
// identifier is optional | required
// hours is optional | required
// milliseconds delimiter is dot | comma 
*/

	const srtCueTemplate = new RegExp(
		/^(\d+\s+)(\d\d:\d\d:\d\d,\d\d\d)\s+-->\s+(\d\d:\d\d:\d\d,\d\d\d)\s+([\s\S]+?)[\n\r]{2}/,
		'mg'
	)

	const vttCueTemplate = new RegExp(
		/^(.+[\n\r])?(\d?\d?:?\d\d:\d\d\.\d\d\d)\s+-->\s+(\d?\d?:?\d\d:\d\d\.\d\d\d).*?[\n\r]([\s\S]+?)[\n\r]{2}/,
		'mg'
	)

	const cueRegexTemplate =
		checkSubsType(subsText) === 'srt' ? srtCueTemplate : vttCueTemplate

	const matchArray = [...matchAll(subsText + '\n\n', cueRegexTemplate)]
	return matchArray.reduce((prevItem, curItem, curIndex) => {
		let [, identifier = '', start, end, body] = curItem
		identifier = identifier.trim()
		start = parseTimecode(start)
		end = parseTimecode(end)
		body = body.trim()
		const id = prefixedIndex(curIndex + 1)
		return { ...prevItem, [id]: { identifier, start, end, body } }
	}, {})
}
/*
    audacity returns tab separated text
    but in some cases tabs are replaced to spaces
    in prettier auto format, for example
    then we use spaces also as separator 
*/
const parseAudacity = subsText => {
	const audacityCueTemplate = new RegExp(
		/^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)/,
		'mg'
	)
	const matchArray = [...matchAll(subsText, audacityCueTemplate)]
	return matchArray.reduce((prevItem, curItem, curIndex) => {
		let [, start, , end, , body] = curItem
		start = +start
		end = +end
		const id = prefixedIndex(curIndex + 1)
		return { ...prevItem, [id]: { start, end, body } }
	}, {})
}

/**
 * gives ids for lines of text
 * useful for translations to subs, without timing
 * @param {string} text
 * @returns {object} - phrases {id:{text}}
 */
const parsePlainText = text => {
	if (!text) return {}
	const rowsArray = text.split('\n')
	const obj = rowsArray.reduce((prev, item, index) => {
		const rowIndex = prefixedIndex(index + 1)
		return { ...prev, [rowIndex]: { text } }
	}, {})
	return obj
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
	const mapTypeParser = {
		srt: () => parseSrtVtt(text),
		vtt: () => parseSrtVtt(text),
		audacity: () => parseAudacity(text),
		unknown: () => parsePlainText(text)
	}

	const subsType = checkSubsType(text)

	const phrasesObject = mapTypeParser[subsType]()

	if (!phrasesObject) return null

	if (!extractVoices) return phrasesObject
	else {
		Object.entries(phrasesObject).forEach(entry => {
			const [key, value] = entry
			let { body } = value // string
			body = extractVoiceTags(body) //array of objects
			phrasesObject[key] = { ...value, body }
		})
		return phrasesObject
	}
}

export { parseSubs, parseTimecode, checkSubsType, extractVoiceTags }
