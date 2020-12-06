# Subtitles parser

Converts popular captions, subtitles, labels (srt, vtt, audacity) into simple Javascript object like:

```javascript
{
	identifier: "1",
	start: 0.498,
	end: 2.827,
	text: "- Here's what I love most \n about food and diet."
}

```

## srt

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

## vtt

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

## audacity (text labels)

```
0.498	2.827	- Here's what I love most about food and diet.
2.827	6.383	We all eat several times a day, and we're totally in charge
6.383	9.427	of what goes on our plate and what stays off.
```
