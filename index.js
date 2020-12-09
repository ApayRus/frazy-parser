import { prefixedIndex } from './utils.js'

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

const checkSubsType = text => {
	const vttAttribute = new RegExp(/^WEBVTT/)
	const srtAttribute = new RegExp(/^\d\s+\d\d:\d\d:\d\d,\d\d\d/)
	const audacityAttribute = new RegExp(/^(\d+?\.?\d+?)\t(\d+?\.?\d+?)\t(.+)/)

	const { length: vttMatch } = text.match(vttAttribute) || []
	const { length: srtMatch } = text.match(srtAttribute) || []
	const { length: audacityMatch } = text.match(audacityAttribute) || []

	if (vttMatch) return 'vtt'
	if (srtMatch) return 'srt'
	if (audacityMatch) return 'audacity'
	return undefined
}

const parseSrtVtt = (subsText, cueRegexTemplate) => {
	const matchArray = [...(subsText + '\n\n').matchAll(cueRegexTemplate)]
	return matchArray.reduce((prevItem, curItem, curIndex) => {
		let [, identifier = '', start, end, text] = curItem
		identifier = identifier.trim()
		start = parseTimecode(start)
		end = parseTimecode(end)
		text = text.trim()
		const id = prefixedIndex(curIndex + 1)
		return { ...prevItem, [id]: { identifier, start, end, text } }
	}, {})
}

const parseAudacity = (text, cueRegexTemplate) => {
	const matchArray = [...text.matchAll(cueRegexTemplate)]
	return matchArray.reduce((prevItem, curItem, curIndex) => {
		let [, start, end, text] = curItem
		start = +start
		end = +end
		const id = prefixedIndex(curIndex + 1)
		return { ...prevItem, [id]: { start, end, text } }
	}, {})
}

/**
 * works for VTT, SRT, Audacity
 * @param {string} text
 * @returns {object} phrasesObject
 * @returns {string} phrasesObject.identifier
 * @returns {number} phrasesObject.start
 * @returns {number} phrasesObject.end
 * @returns {string} phrasesObject.text
 * @example
    {'001': {
        identifier: 1,
        start: 0.2,
        end: 5.32,
        text: "bla bla"
    }}
 */
const parseSubs = text => {
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

	const audacityCueTemplate = new RegExp(
		/(\d+?\.?\d+?)\t(\d+?\.?\d+?)\t(.+)/,
		'mg'
	)

	const mapTypeParser = {
		srt: () => parseSrtVtt(text, srtCueTemplate),
		vtt: () => parseSrtVtt(text, vttCueTemplate),
		audacity: () => parseAudacity(text, audacityCueTemplate)
	}

	const subsType = checkSubsType(text)

	return mapTypeParser[subsType]()
}

module.exports = { parseTimecode, checkSubsType, parseSubs }
