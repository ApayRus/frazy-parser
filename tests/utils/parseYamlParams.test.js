import { parseYamlParams } from '../../parsers/utils.js'

const input = `title: Moana
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
tags: 
	cartoon, adventures, fantasy`

const expectedOutput = {
	title: 'Moana',
	description:
		"In Ancient Polynesia,\nwhen a terrible curse incurred by the Demigod Maui reaches Moana's island,\nshe answers the Ocean's call to seek out the Demigod to set things right.",
	publisher: 'Disney',
	year: '2016',
	mediaLink: 'http://192.168.0.189:8080/moana320x135.mp4',
	translations: [
		{ ru: 'http://192.168.0.189:3000/ru.vtt' },
		{ de: 'http://192.168.0.189:3000/de.vtt' }
	],
	tags: 'cartoon, adventures, fantasy'
}

test('parseYamlParams', () => {
	expect(parseYamlParams(input)).toEqual(expectedOutput)
})
