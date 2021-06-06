import { parseSubs } from '../../parsers/subtitles.js'

const assExample = `0:00:23.90,0:00:26.60 line one 
0:00:27.83,0:00:32.03 line two 
0:00:32.43,0:00:41.89 line three 
0:01:01.15,0:01:04.45 line four 
0:01:05.75,0:01:09.85 line five `

const result = parseSubs(assExample)

const expectedOutput = [
	{
		id: '1',
		start: 23.9,
		end: 26.6,
		body: [
			{
				text: 'line one '
			}
		]
	},
	{
		id: '2',
		start: 27.83,
		end: 32.03,
		body: [
			{
				text: 'line two '
			}
		]
	},
	{
		id: '3',
		start: 32.43,
		end: 41.89,
		body: [
			{
				text: 'line three '
			}
		]
	},
	{
		id: '4',
		start: 61.15,
		end: 64.45,
		body: [
			{
				text: 'line four '
			}
		]
	},
	{
		id: '5',
		start: 65.75,
		end: 69.85,
		body: [
			{
				text: 'line five '
			}
		]
	}
]

test('ass', () => {
	expect(result).toEqual(expectedOutput)
})
