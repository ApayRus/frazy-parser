import { parseVtt } from '../../src/vttAdvanced'

const input = `WEBVTT - TOPTITLE
title: Moana
description: 
	In Ancient Polynesia, 
	when a terrible curse incurred by the Demigod Maui reaches Moana's island, 
	she answers the Ocean's call to seek out the Demigod to set things right.
publisher: Disney
year: 2016
mediaLink: http://192.168.0.189:8080/moana320x135.mp4
translations: 
	ru: http://192.168.0.189:3000/ru.vtt
	de: http://192.168.0.189:3000/de.vtt

NOTE CHAPTER
title: 1. Prehistory from Gramma
description: Gramma tells a legend about how the World was created.
start: 51

1
00:00:55.140 --> 00:00:56.683
GRAMMA: In the beginning...

2
00:00:56.850 --> 00:00:59.686
there was only ocean...

3
00:00:59.853 --> 00:01:03.815
until the mother island emerged.

NOTE COMMENT
Hi! I'm a comment
with multilines of text

4
00:01:03.982 --> 00:01:05.817
Te Fiti.

5
00:01:06.443 --> 00:01:10.196
Her heart held the greatest power ever known.

`

const expectedOutput = [
	{
		type: 'info',
		topTitle: 'TOPTITLE',
		title: 'Moana',
		description:
			"In Ancient Polynesia,\nwhen a terrible curse incurred by the Demigod Maui reaches Moana's island,\nshe answers the Ocean's call to seek out the Demigod to set things right.",
		publisher: 'Disney',
		year: '2016',
		mediaLink: 'http://192.168.0.189:8080/moana320x135.mp4',
		translations: [
			{
				ru: 'http://192.168.0.189:3000/ru.vtt'
			},
			{
				de: 'http://192.168.0.189:3000/de.vtt'
			}
		]
	},
	{
		type: 'chapter',
		title: '1. Prehistory from Gramma',
		description: 'Gramma tells a legend about how the World was created.',
		start: 51
	},
	{
		type: 'cue',
		id: 1,
		identifier: '1',
		start: 55.14,
		end: 56.683,
		body: [
			{
				text: 'GRAMMA: In the beginning...'
			}
		]
	},
	{
		type: 'cue',
		id: 2,
		identifier: '2',
		start: 56.85,
		end: 59.686,
		body: [
			{
				text: 'there was only ocean...'
			}
		]
	},
	{
		type: 'cue',
		id: 3,
		identifier: '3',
		start: 59.853,
		end: 63.815,
		body: [
			{
				text: 'until the mother island emerged.'
			}
		]
	},
	{
		type: 'comment',
		text: "Hi! I'm a comment\nwith multilines of text"
	},
	{
		type: 'cue',
		id: 4,
		identifier: '4',
		start: 63.982,
		end: 65.81700000000001,
		body: [
			{
				text: 'Te Fiti.'
			}
		]
	},
	{
		type: 'cue',
		id: 5,
		identifier: '5',
		start: 66.443,
		end: 70.196,
		body: [
			{
				text: 'Her heart held the greatest power ever known.'
			}
		]
	}
]

test('parseVtt', () => {
	expect(parseVtt(input)).toEqual(expectedOutput)
})
