import { parseTimecode } from '../../src/utils.js'

test('parseTimecode hh:mm:ss.mls', () => {
	expect(parseTimecode('12:34:56.789')).toEqual(45296.789)
	// 56.789 + 34*60 + 12*60*60
})

test('parseTimecode hh:mm:ss', () => {
	expect(parseTimecode('00:01:23')).toEqual(83)
})

test('parseTimecode m:ss', () => {
	expect(parseTimecode('1:23')).toEqual(83)
})

test('parseTimecode s', () => {
	expect(parseTimecode('1.23')).toEqual(1.23)
})

test('parseTimecode', () => {
	expect(parseTimecode('00:00:01.234')).toEqual(1.234)
})
