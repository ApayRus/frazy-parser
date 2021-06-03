import { extractVoiceTags } from '../../parsers/utils.js'

const input = [
	`text without voice`,

	`<v.load.wispering John>With classes, without closing tag`,

	`<v.load.wispering John>With classes, without closing tag
with second line 
and third line`,

	`<v.load.wispering John>With classes, without closing tag</v>
with second line 
and third line`,

	`<v Speaker One>first line </v>
	<v Speaker Two>second line </v>
	<v Speaker Three> third line </v>
	fourth line without speakers `,

	`Text 1 before any voice tag, at the beginning
	<v Hayder Ali>Text 2, between voices </v>
	Text 3 without voice tag, between tags
	 <v Gany> Text 4, second with voice </v>
	 Text 5 without voice tag, at the end of cue`
]

const expectedOutput = [
	[{ text: 'text without voice' }],
	[
		{
			voice: { classes: ['load', 'wispering'], name: 'John' },
			text: 'With classes, without closing tag'
		}
	],
	[
		{
			voice: { classes: ['load', 'wispering'], name: 'John' },
			text: `With classes, without closing tag
with second line 
and third line`
		}
	],
	[
		{
			voice: { classes: ['load', 'wispering'], name: 'John' },
			text: `With classes, without closing tag`
		},
		{
			text: `with second line 
and third line`
		}
	],

	[
		{ voice: { name: 'Speaker One', classes: [] }, text: 'first line' },
		{ voice: { name: 'Speaker Two', classes: [] }, text: 'second line' },
		{ voice: { name: 'Speaker Three', classes: [] }, text: 'third line' },
		{ text: 'fourth line without speakers' }
	],
	[
		{ text: 'Text 1 before any voice tag, at the beginning' },
		{
			voice: {
				classes: [],
				name: 'Hayder Ali'
			},
			text: 'Text 2, between voices'
		},
		{ text: 'Text 3 without voice tag, between tags' },
		{
			voice: {
				classes: [],
				name: 'Gany'
			},
			text: 'Text 4, second with voice'
		},
		{ text: 'Text 5 without voice tag, at the end of cue' }
	]
]

test('extractVoiceTags', () => {
	expect(extractVoiceTags(input[0])).toEqual(expectedOutput[0])
	expect(extractVoiceTags(input[1])).toEqual(expectedOutput[1])
	expect(extractVoiceTags(input[2])).toEqual(expectedOutput[2])
	expect(extractVoiceTags(input[3])).toEqual(expectedOutput[3])
})
