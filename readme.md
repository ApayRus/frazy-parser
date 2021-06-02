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

As in vtt, a cue can have several `<v>` tags.

## Voice tag

In every subs you can put `<v>` tag. It is native only for `vtt`, but we supports it everywhere.

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
