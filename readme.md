# Universal Subtitle Parser

Identifies a subtitle type by its text and converts it to a JavaScript object.

## Supported formats:

- vtt
- srt
- ass
- audacity (labels)

## Output format:

```javascript
{
	identifier: "1",
	start: 0.498,
	end: 2.827,
	body: [ {text: "Hi, how are you?"} ]
}

```

## Install

`npm i frazy-parser`

## Usage

```javascript
import { parseSubs } from 'frazy-parser'

const phrases = parseSubs(subsText)
```

## Voice tag

In any subs type you can use `<v>` tag. It is native only for `vtt`, but we support it for any format.

`0.15 4.38 <v.loud.kindly John Doe> Hi everyone! How are you doing!?`

will be converted to:

```javascript
{
	start: 0.15,
	end: 4.38,
	body: [
		{
			voice: {
				name: 'John Doe',
				classes: ['loud', 'kindly']
			},
			text: 'Hi everyone! How are you doing!?'
		}
	]
}
```

As in a `vtt` format, a cue (phrase) can have several `<v>` tags. In that case you should use it with closing tag `</v>`.

## Testing

You can see more examples in `/tests/subtitles` folder. For run tests:

```
npm test
```

## Examples of subtitle formats

### srt

```
1
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
and what stays off.
```

### vtt

```
WEBVTT

00:00:00.498 --> 00:00:02.827
- Here's what I love most
about food and diet.

00:00:02.827 --> 00:00:06.383
We all eat several times a day,
and we're totally in charge

00:00:06.383 --> 00:00:09.427
of what goes on our plate
and what stays off.
```

### audacity (text labels)

Delimiter can be space or tab.

```
0.498	2.827	- Here's what I love most about food and diet.
2.827	6.383	We all eat several times a day, and we're totally in charge
6.383	9.427	of what goes on our plate and what stays off.
```

### ass

Only the simplest scheme is supported: `start,end text`

```
0:00:23.90,0:00:26.60 line one
0:00:27.83,0:00:32.03 line two
0:00:32.43,0:00:41.89 line three
0:01:01.15,0:01:04.45 line four
0:01:05.75,0:01:09.85 line five
```

## parseVtt

The VTT format allows you to place, in addition to the main cues/phrases, additional information such as signature, chapters, comments. We provide parsing of that texts in a YAML-like way.

```javascript
import { parseVtt } from 'frazy-parser'

const vttExample = `WEBVTT - TOPTITLE
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

parseVtt(vttExample)
```

You'll get the output:

```javascript
[
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
		id: 3,
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
		id: 4,
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
		id: 5,
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
		id: 7,
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
		id: 8,
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
```

In that way, you can use a valid VTT file as a data source for your app. And a comprehensive data structure will be extracted from the plain text, that is still a valid VTT file, and you can use it also as an ordinary caption/subtitle file.
