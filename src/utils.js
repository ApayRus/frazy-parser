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

/**
 *
 * @param {string} inputSeconds
 * @example
 * formatSecondsToTime(225) // "3:45"
 */
export const formatSecondsToTime = inputSeconds => {
	let totalSeconds = +inputSeconds.toFixed(0)
	const hours = Math.floor(totalSeconds / 3600)
	const hoursString = hours ? hours + ':' : ''
	totalSeconds %= 3600
	const minutes = Math.floor(totalSeconds / 60)
	const seconds = totalSeconds % 60
	const secondsString = seconds.toString().padStart(2, '0')
	return `${hoursString}${minutes}:${secondsString}`
}

export const findCurrentPhraseNum = (phrases, time) => {
	const findIndex = (array, time) => {
		return (
			array.findIndex((elem, index, array) => {
				const { end: thisEnd } = elem
				const { end: nextEnd } = array[index + 1] || Infinity
				return time >= thisEnd && time <= nextEnd
			}) + 1
		)
	}

	const findedIndex = findIndex(phrases, time)

	return findedIndex ? findedIndex : phrases.length - 1
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

/**
 * checks is paragraph text is yaml params or not
 * if not - returns null
 * if yes - returns object of params
 *
 * @param {string} paragraphText
 */
export const yamlParams = paragraphText => {
	const lines = paragraphText.trim().split('\n')
	const matches = [...paragraphText.matchAll(/^(.+?):\s*(.+?)$/gm)]
	if (!matches) return null
	if (matches.length !== lines.length) return null

	const yamlParams = matches.reduce((prev, item) => {
		const [, key, value] = item
		return { ...prev, [key]: value }
	}, {})

	return yamlParams
}

export const parseYamlParams = text => {
	const paramTemplate = /^(.+?):\s*(.+?)$/
	const matches = [...text.matchAll(new RegExp(paramTemplate, 'gm'))]
	if (!matches) return null // it is not params text

	const paramsObject = {}
	const linesArray = text ? text.split('\n') : []

	let parentIntend = 0
	let nextIntend = 0
	let parentKey = ''

	linesArray.forEach((line, index, linesArray) => {
		const getIntendOfLine = index => {
			return linesArray?.[index]?.match(/^\s+/)?.[0]?.length || 0
		}
		const intend = getIntendOfLine(index) // current line
		nextIntend = getIntendOfLine(index + 1) || 0
		const paramMatch = line.match(paramTemplate)

		if (!paramMatch && parentKey) {
			// we have text line, and should put it to prev parent key
			const prevText = paramsObject[parentKey] || ''
			const isNotLastLine = intend === nextIntend
			const lastSymbol = isNotLastLine ? '\n' : ''
			paramsObject[parentKey] = prevText + line?.trim() + lastSymbol
		}
		let [, paramKey, paramValue] = paramMatch || []
		paramKey = paramKey?.trim()
		paramValue = paramValue?.trim()

		if (paramKey && paramValue && !parentKey) {
			// whole line is a 1-st level param
			paramsObject[paramKey] = paramValue
		}
		if (paramKey && paramValue && parentKey) {
			// array of params for parent key
			const prevArray = paramsObject[parentKey] || []
			const newValue = { [paramKey]: paramValue }
			prevArray.push(newValue)
			paramsObject[parentKey] = prevArray
		}
		if (paramKey && !paramValue) {
			// we have a key, but haven't value => it is parent key for next lines
			parentKey = paramKey
			parentIntend = intend
		}

		if (nextIntend < intend) {
			// we had parentKey on prev step, but now should clear it because of intend
			parentKey = ''
			parentIntend = 0
		}
	})

	return paramsObject
}
