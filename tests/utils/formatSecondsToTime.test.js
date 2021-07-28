import { formatSecondsToTime } from '../../src/utils.js'

test('formatSecondsToTime hh:mm:ss.mls', () => {
	expect(formatSecondsToTime(12)).toEqual('0:12')
	// 56.789 + 34*60 + 12*60*60
})

test('formatSecondsToTime hh:mm:ss', () => {
	expect(formatSecondsToTime(123)).toEqual('2:03')
})

test('formatSecondsToTime m:ss', () => {
	expect(formatSecondsToTime(1234)).toEqual('20:34')
})

test('formatSecondsToTime s', () => {
	expect(formatSecondsToTime(12345)).toEqual('3:25:45')
})

test('formatSecondsToTime', () => {
	expect(formatSecondsToTime(123456)).toEqual('34:17:36')
})
