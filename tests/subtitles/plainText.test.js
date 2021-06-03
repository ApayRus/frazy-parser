import { parseSubs } from '../../parsers/subtitles.js'

const plainTextExample = `line one 
line two 
line three 
line four. `

const result = parseSubs(plainTextExample)

const expectedOutput = [
	{
		body: [
			{
				text: 'line one '
			}
		]
	},
	{
		body: [
			{
				text: 'line two '
			}
		]
	},
	{
		body: [
			{
				text: 'line three '
			}
		]
	},
	{
		body: [
			{
				text: 'line four. '
			}
		]
	}
]

test('plainText', () => {
	expect(result).toEqual(expectedOutput)
})
