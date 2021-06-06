import { parseSubs } from '../../parsers/subtitles.js'

const audacityExample = `2.814442	8.240772	first line 1
8.571256	13.475208	second line 2
14.519963	19.551845	third line 3
19.551845	22.174393	fourth line 4
22.174393	26.609272	fiveth line 5`

const result = parseSubs(audacityExample)

const expectedOutput = [
	{
		id: '1',
		start: 2.814442,
		end: 8.240772,
		body: [
			{
				text: 'first line 1'
			}
		]
	},
	{
		id: '2',
		start: 8.571256,
		end: 13.475208,
		body: [
			{
				text: 'second line 2'
			}
		]
	},
	{
		id: '3',
		start: 14.519963,
		end: 19.551845,
		body: [
			{
				text: 'third line 3'
			}
		]
	},
	{
		id: '4',
		start: 19.551845,
		end: 22.174393,
		body: [
			{
				text: 'fourth line 4'
			}
		]
	},
	{
		id: '5',
		start: 22.174393,
		end: 26.609272,
		body: [
			{
				text: 'fiveth line 5'
			}
		]
	}
]

test('audacity', () => {
	expect(result).toEqual(expectedOutput)
})
