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
<v Roger Bingham>We are in New York City

idExample
00:13.000 --> 00:16.000
<v Roger Bingham>We're actually at the Lucern Hotel, just down the street
second line of second cue

00:16.000 --> 00:18.000
<v Roger Bingham>from the American Museum of Natural History`

const audacityTextExample = `2.814442	8.240772	1
8.571256	13.475208	2
14.519963	19.551845	3
19.551845	22.174393	4
22.174393	26.609272	5`

test('===1234', () => {
    expect(testFunction()).toBe(1234)
})