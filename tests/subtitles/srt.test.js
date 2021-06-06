import { parseSubs } from '../../parsers/subtitles.js'

const srtExample = `1
00:00:00,000 --> 00:00:02,827
- Here's what I love most
about food and diet.

2
00:00:02,827 --> 00:00:06,383
We all eat several times a day,
and we're totally in charge

3
00:00:06,383 --> 00:00:09,427
of what goes on our plate
and what stays off.`

const result = parseSubs(srtExample)

const expectedOutput = [
	{
		id: '1',
		identifier: '1',
		start: 0,
		end: 2.827,
		body: [
			{
				text: "- Here's what I love most\nabout food and diet."
			}
		]
	},
	{
		id: '2',
		identifier: '2',
		start: 2.827,
		end: 6.383,
		body: [
			{
				text: "We all eat several times a day,\nand we're totally in charge"
			}
		]
	},
	{
		id: '3',
		identifier: '3',
		start: 6.383,
		end: 9.427,
		body: [
			{
				text: 'of what goes on our plate\nand what stays off.'
			}
		]
	}
]

test('srt', () => {
	expect(result).toEqual(expectedOutput)
})
