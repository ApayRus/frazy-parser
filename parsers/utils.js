import matchAll from 'string.prototype.matchall'

/**
 * works for SRT, VTT, ASS
 * @param {string} timecode like `00:00:00.500` or `00:00.500` (hours is optional)
 * @returns {number} seconds like 1234.567
 * @example
 * parseTime('00:00:00.500') // 0.5
 */
export const parseTimecode = timecode => {
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

export const extractVoiceTags = cueText => {
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