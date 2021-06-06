import { parseSubs } from '../../parsers/subtitles.js'

const vttExample = `WEBVTT

00:11.000 --> 00:13.000 position:10%,line-left align:left size:35%
<v.loud Roger Bingham>We are in New York City

idExample
00:13.000 --> 00:16.000
<v.whispering.kindly Roger Bingham>We're actually at the Lucern Hotel, just down the street
second line of second cue

00:16.000 --> 00:18.000
<v Roger Bingham>from the American Museum of Natural History`

const result = parseSubs(vttExample)

const expectedOutput = [
	{
		id: 1,
		start: 11,
		end: 13,
		body: [
			{
				voice: {
					name: 'Roger Bingham',
					classes: ['loud']
				},
				text: 'We are in New York City'
			}
		]
	},
	{
		id: 2,
		identifier: 'idExample',
		start: 13,
		end: 16,
		body: [
			{
				voice: {
					name: 'Roger Bingham',
					classes: ['whispering', 'kindly']
				},
				text:
					"We're actually at the Lucern Hotel, just down the street\nsecond line of second cue"
			}
		]
	},
	{
		id: 3,
		start: 16,
		end: 18,
		body: [
			{
				voice: {
					name: 'Roger Bingham',
					classes: []
				},
				text: 'from the American Museum of Natural History'
			}
		]
	}
]

test('vtt', () => {
	expect(result).toEqual(expectedOutput)
})
