import matchAll from 'string.prototype.matchall'
import { parseTimecode, extractVoiceTags } from './utils.js'
/* 
cueTemplates play 2 roles:
1) check subs type
2) extract data from it: identifier, start, end, body */
const cueTemplates = {
	srt: /^(\d+\s+)(\d\d:\d\d:\d\d,\d\d\d)\s+-->\s+(\d\d:\d\d:\d\d,\d\d\d)\s+([\s\S]+?)[\n\r]{2}/gm,
	vtt: /^(.+[\n\r])?(\d?\d?:?\d\d:\d\d\.\d\d\d)\s+-->\s+(\d?\d?:?\d\d:\d\d\.\d\d\d).*?[\n\r]([\s\S]+?)[\n\r]{2}/gm,
	ass: /^(\d?\d:\d\d:\d\d\.\d\d),(\d?\d:\d\d:\d\d\.\d\d) (.+?)$/gm,
	audacity: /^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)$/gm, // a little tricky, because floating part is optional
	unknown: /^(.+)$/gm
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
}

// for examples, please read /tests/subtitles/
const parseSubs = (text, extractVoices = true) => {
	const subsType = checkSubsType(text)
	const indexes = positionInCueTemplate[subsType]
	const arrayOfMatches = [...matchAll(text + '\n\n', cueTemplates[subsType])]

	const subsObject = arrayOfMatches.map(elem => {
		const identifier = elem?.[indexes?.identifier]?.trim() || ''
		const start = parseTimecode(elem?.[indexes?.start])
		const end = parseTimecode(elem?.[indexes?.end])
		const body = extractVoices
			? extractVoiceTags(elem?.[indexes?.body])
			: elem?.[indexes?.body]
		const currentSub = { identifier, start, end, body }
		if (!identifier) delete currentSub.identifier
		if (!start) delete currentSub.start
		if (!end) delete currentSub.end
		return currentSub
	})
	return subsObject
}

export { parseSubs, checkSubsType }
