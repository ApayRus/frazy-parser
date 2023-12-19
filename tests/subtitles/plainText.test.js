import { parseSubs } from '../../src/subtitles.js'

const plainTextExample1 = `<v voice1>line one 
<v voice2>line two 
line three 

line five. `

const result1 = parseSubs(plainTextExample1)

const expectedOutput1 = [
	{
		id: 1,
		body: [
			{
				voice: { name: 'voice1', classes: [] },
				text: 'line one'
			}
		]
	},
	{
		id: 2,
		body: [
			{
				voice: { name: 'voice2', classes: [] },
				text: 'line two'
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

test('plainText1', () => {
	expect(result1).toEqual(expectedOutput1)
})

/* const plainTextExample2 = `
`

const result2 = parseSubs(plainTextExample2)

const expectedOutput2 = []

test('plainText2', () => {
	expect(result2).toEqual(expectedOutput2)
}) */
