import { extractVoiceTags, parseSubs } from './subtitles.js'

const srtTextExample = `1
00:00:00,498 --> 00:00:02,827
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

const vttTextExample = `WEBVTT

00:11.000 --> 00:13.000 position:10%,line-left align:left size:35%
<v.loud Roger Bingham>We are in New York City

idExample
00:13.000 --> 00:16.000
<v.whispering.kindly Roger Bingham>We're actually at the Lucern Hotel, just down the street
second line of second cue

00:16.000 --> 00:18.000
<v Roger Bingham>from the American Museum of Natural History`

const audacityTextExample = `2.814442	8.240772	1
8.571256	13.475208	2
14.519963	19.551845	3
19.551845	22.174393	4
22.174393	26.609272	5`

test('extractVoiceTags', () => {
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

    const output = [
        [{ text: 'text without voice' }],
        [{
            voice: { classes: ['load', 'wispering'], name: 'John' },
            text: 'With classes, without closing tag'
        }],
        [{
            voice: { classes: ['load', 'wispering'], name: 'John' },
            text: `With classes, without closing tag
with second line 
and third line`
        }],
        [{
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

    expect(extractVoiceTags(input[0])).toEqual(output[0])
    expect(extractVoiceTags(input[1])).toEqual(output[1])
    expect(extractVoiceTags(input[2])).toEqual(output[2])
    expect(extractVoiceTags(input[3])).toEqual(output[3])
})

test('parseVTT', () => {
    const vttOutput = {
        '001': {
            identifier: '',
            start: 11,
            end: 13,
            body: [{
                voice: { name: 'Roger Bingham', classes: ['loud'] },
                text: 'We are in New York City'
            }]
        },
        '002': {
            identifier: 'idExample',
            start: 13,
            end: 16,
            body: [{
                voice: { name: 'Roger Bingham', classes: ['whispering', 'kindly'] },
                text: "We're actually at the Lucern Hotel, just down the street\nsecond line of second cue"
            }]
        },
        '003': {
            identifier: '',
            start: 16,
            end: 18,
            body: [{
                voice: { name: 'Roger Bingham', classes: [] },
                text: 'from the American Museum of Natural History'
            }]
        }
    }

    expect(parseSubs(vttTextExample)).toEqual(vttOutput)
})