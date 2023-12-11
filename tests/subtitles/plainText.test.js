import { parseSubs } from '../../src/subtitles.js'

const plainTextExample = `line one 
line two 
line three 

line five. `

const result = parseSubs(plainTextExample)

const expectedOutput = [
	{
		id: 1,
		body: [
			{
				text: 'line one '
			}
		]
	},
	{
		id: 2,
		body: [
			{
				text: 'line two '
			}
		]
	},
	{
		id: 3,
		body: [
			{
				text: 'line three '
			}
		]
	},
	{
		id: 4,
		body: [
			{
				text: ''
			}
		]
	},
	{
		id: 5,
		body: [
			{
				text: 'line five. '
			}
		]
	}
]

test('plainText', () => {
	expect(result).toEqual(expectedOutput)
})
