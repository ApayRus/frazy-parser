import { findCurrentPhraseNum } from '../../src/utils.js'

const phrases = [
	{ id: '000', start: 0, end: 0, text: '' },
	{
		id: '001',
		start: 55.14,
		end: 56.683,
		text: 'GRAMMA: In the beginning...'
	},
	{
		id: '002',
		start: 56.85,
		end: 59.686,
		text: 'there was only ocean...'
	},
	{
		id: '003',
		start: 59.853,
		end: 63.815,
		text: 'until the mother island emerged.'
	},
	{
		id: '004',
		start: 63.982,
		end: 65.81700000000001,
		text: 'Te Fiti.'
	},
	{
		id: '005',
		start: 66.443,
		end: 70.196,
		text: 'Her heart held the greatest power ever known.'
	},
	{
		id: '006',
		start: 70.363,
		end: 73.324,
		text: 'It could create life itself.'
	},
	{
		id: '007',
		start: 73.491,
		end: 77.70400000000001,
		text: 'And Te Fiti shared it with the world.'
	},
	{
		id: '008',
		start: 80.16499999999999,
		end: 81.374,
		text: 'But in time...'
	},
	{
		id: '009',
		start: 81.541,
		end: 84.544,
		text: "some began to seek Te Fiti's heart."
	},
	{
		id: '010',
		start: 84.711,
		end: 86.838,
		text: 'They believed if they could possess it...'
	},
	{
		id: '011',
		start: 87.005,
		end: 90.633,
		text: 'the great power of creation would be theirs.'
	},
	{ id: '012', start: 90.8, end: 93.178, text: 'And one day...' },
	{
		id: '013',
		start: 93.72,
		end: 96.306,
		text: 'the most daring of them all...'
	},
	{
		id: '014',
		start: 96.473,
		end: 100.852,
		text: 'voyaged across the vast ocean to take it.'
	},
	{
		id: '015',
		start: 102.14500000000001,
		end: 107.025,
		text: 'He was a demigod of the wind and sea.'
	},
	{
		id: '016',
		start: 108.485,
		end: 110.069,
		text: 'He was a warrior.'
	},
	{ id: '017', start: 111.196, end: 112.572, text: 'A trickster.' },
	{
		id: '018',
		start: 115.033,
		end: 117.243,
		text: 'A shapeshifter who could change form...'
	},
	{
		id: '019',
		start: 118.286,
		end: 121.039,
		text: 'with the power of his magical fish hook.'
	},
	{ id: '020', start: 122.874, end: 124.375, text: 'And his name...' },
	{ id: '021', start: 125.21, end: 127.42, text: 'was Maui.' },
	{ id: '022', start: 132.217, end: 133.218, text: '(CHUCKLES)' },
	{ id: '023', start: 133.76, end: 134.969, text: '(RUMBLING)' },
	{
		id: '024',
		start: 136.888,
		end: 141.392,
		text: 'But without her heart, Te Fiti began to crumble...'
	},
	{
		id: '025',
		start: 141.559,
		end: 144.312,
		text: 'giving birth to a terrible darkness.'
	},
	{
		id: '026',
		start: 162.747,
		end: 164.374,
		text: 'Maui tried to escape...'
	},
	{
		id: '027',
		start: 164.916,
		end: 167.91899999999998,
		text: 'but was confronted by another who sought the heart.'
	},
	{ id: '028', start: 170.755, end: 172.423, text: 'Te Kā!' },
	{
		id: '029',
		start: 172.59,
		end: 175.59300000000002,
		text: 'A demon of earth and fire.'
	},
	{
		id: '030',
		start: 183.226,
		end: 186.104,
		text: 'Maui was struck from the sky...'
	},
	{
		id: '031',
		start: 187.355,
		end: 189.691,
		text: 'never to be seen again.'
	},
	{
		id: '032',
		start: 190.275,
		end: 194.946,
		text: 'And his magical fish hook and the heart of Te Fiti...'
	},
	{
		id: '033',
		start: 195.113,
		end: 197.907,
		text: 'were lost to the sea.'
	},
	{
		id: '034',
		start: 198.61599999999999,
		end: 200.243,
		text: 'Where, even now...'
	},
	{
		id: '035',
		start: 200.41,
		end: 202.37,
		text: '1,000 years later...'
	},
	{
		id: '036',
		start: 202.537,
		end: 205.123,
		text: 'Te Kā and the demons of the deep...'
	},
	{
		id: '037',
		start: 205.29,
		end: 207.292,
		text: 'still hunt for the heart.'
	},
	{
		id: '038',
		start: 207.709,
		end: 211.796,
		text: 'Hiding in a darkness that will continue to spread...'
	},
	{
		id: '039',
		start: 211.963,
		end: 214.257,
		text: 'chasing away our fish...'
	},
	{
		id: '040',
		start: 214.424,
		end: 217.635,
		text: 'draining the life from island after island...'
	},
	{
		id: '041',
		start: 217.802,
		end: 221.055,
		text: 'until every one of us is devoured...'
	},
	{
		id: '042',
		start: 221.222,
		end: 223.892,
		text: 'by the bloodthirsty jaws...'
	},
	{
		id: '043',
		start: 224.058,
		end: 226.811,
		text: 'of inescapable death!'
	},
	{
		id: '044',
		start: 228.47899999999998,
		end: 229.814,
		text: '(WAILING)'
	},
	{ id: '045', start: 232.066, end: 233.651, text: 'But one day...' },
	{
		id: '046',
		start: 233.81799999999998,
		end: 235.82,
		text: 'the heart will be found...'
	},
	{
		id: '047',
		start: 235.987,
		end: 239.073,
		text: 'by someone who will journey beyond our reef...'
	},
	{ id: '048', start: 239.24, end: 240.575, text: 'find Maui...' },
	{
		id: '049',
		start: 240.783,
		end: 242.827,
		text: 'deliver him across the great ocean...'
	},
	{
		id: '050',
		start: 242.994,
		end: 245.163,
		text: "to restore Te Fiti's heart..."
	},
	{ id: '051', start: 245.33, end: 246.998, text: 'and save us all.' },
	{
		id: '052',
		start: 247.957,
		end: 249.709,
		text: "Whoa, whoa, whoa! Thank you, Mother. That's enough."
	},
	{ id: '053', start: 249.792, end: 250.752, text: 'Papa.' },
	{
		id: '054',
		start: 250.835,
		end: 252.67,
		text: 'No one goes outside the reef.'
	},
	{
		id: '055',
		start: 252.837,
		end: 255.924,
		text: 'We are safe here. There is no darkness.'
	},
	{
		id: '056',
		start: 256.09,
		end: 257.842,
		text: 'There are no monsters.'
	},
	{ id: '057', start: 260.803, end: 261.804, text: 'Monsters!' },
	{
		id: '058',
		start: 261.971,
		end: 264.015,
		text: "-- There's no monsters, no monsters...\n-it's the darkness!"
	},
	{
		id: '059',
		start: 264.515,
		end: 268.186,
		text: 'No, there is nothing beyond our reef, but storms and rough seas.'
	},
	{
		id: '060',
		start: 268.353,
		end: 269.479,
		text: "I'm gonna throw up."
	},
	{
		id: '061',
		start: 269.646,
		end: 271.814,
		text: 'TUI: As long as we stay on our very safe island...'
	},
	{
		id: '062',
		start: 272.523,
		end: 273.81600000000003,
		text: "...we'll be fine."
	},
	{
		id: '063',
		start: 273.983,
		end: 275.443,
		text: 'GRAMMA: The legends are true.'
	},
	{
		id: '064',
		start: 275.61,
		end: 277.195,
		text: 'Someone will have to go.'
	},
	{
		id: '065',
		start: 277.403,
		end: 279.53,
		text: 'TUI: Mother, Motunui is paradise.'
	},
	{
		id: '066',
		start: 279.781,
		end: 282.367,
		text: 'Who would want to go anywhere else?'
	},
	{
		id: '067',
		start: 295.88,
		end: 297.548,
		text: '(BIRDS SCREECHING)'
	},
	{ id: '068', start: 318.695, end: 320.738, text: 'Shoo,shoo!' },
	{ id: '069', start: 333.835, end: 334.836, text: '(EXCLAIMING)' },
	{
		id: '070',
		start: 339.007,
		end: 340.55,
		text: '(ETHEREAL WHISPERING)'
	},
	{ id: '071', start: 346.472, end: 347.557, text: '(GIGGLING)' },
	{ id: '072', start: 403.946, end: 405.49, text: '(GIGGLING)' },
	{ id: '073', start: 421.422, end: 422.715, text: 'TUI: Moana!' },
	{
		id: '074',
		start: 437.98,
		end: 440.858,
		text: 'There you are, Moana.\nWhat are you doing? You scared me.'
	},
	{
		id: '075',
		start: 441.025,
		end: 442.652,
		text: "What? I wanna's go back."
	},
	{
		id: '076',
		start: 442.819,
		end: 445.404,
		text: "I know, I know. But you don't go out there."
	},
	{ id: '077', start: 446.322, end: 447.532, text: "It's dangerous." },
	{ id: '078', start: 449.283, end: 451.536, text: 'Moana, come on.' },
	{
		id: '079',
		start: 451.702,
		end: 453.704,
		text: "Let's go back to the village."
	},
	{
		id: '080',
		start: 455.498,
		end: 457.75,
		text: 'You are the next great chief\nof our people.'
	},
	{
		id: '081',
		start: 457.91700000000003,
		end: 460.92,
		text: 'And you will do wondrous things,\nmy little minnow.'
	},
	{
		id: '082',
		start: 461.504,
		end: 465.466,
		text: "Oh, yes. But first, you must learn\nwhere you're meant to be."
	},
	{ id: '083', start: 477.562, end: 479.313, text: 'Moana' },
	{
		id: '084',
		start: 479.48,
		end: 481.858,
		text: 'Make way, make way'
	},
	{
		id: '085',
		start: 482.024,
		end: 483.901,
		text: "Moana, it's time you knew"
	},
	{
		id: '086',
		start: 484.068,
		end: 487.822,
		text: 'The village of Motunui is all you need'
	},
	{
		id: '087',
		start: 487.989,
		end: 490.074,
		text: 'The dancers are practicing'
	},
	{
		id: '088',
		start: 490.283,
		end: 492.577,
		text: 'They dance to an ancient song'
	},
	{
		id: '089',
		start: 492.743,
		end: 495.58,
		text: "Who needs a new song This old one's all we need"
	},
	{
		id: '090',
		start: 495.746,
		end: 497.665,
		text: 'This tradition is our mission'
	},
	{
		id: '091',
		start: 497.79,
		end: 500.418,
		text: "And Moana, there's so much to do"
	},
	{
		id: '092',
		start: 500.585,
		end: 501.961,
		text: "Don't trip on the taro root"
	},
	{
		id: '093',
		start: 502.128,
		end: 504.255,
		text: "That's all you need"
	},
	{
		id: '094',
		start: 504.422,
		end: 506.382,
		text: 'We share everything we make'
	},
	{
		id: '095',
		start: 506.549,
		end: 508.426,
		text: 'We joke and we weave our baskets'
	},
	{
		id: '096',
		start: 508.593,
		end: 510.887,
		text: 'The fishermen come back from the sea'
	},
	{ id: '097', start: 511.053, end: 512.555, text: 'I wanna see' },
	{ id: '098', start: 512.722, end: 514.473, text: "Don't walk away" },
	{
		id: '099',
		start: 514.64,
		end: 516.559,
		text: 'Moana, stay on the ground now'
	},
	{
		id: '100',
		start: 516.726,
		end: 518.603,
		text: 'Our people will need a chief'
	}
]

test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 56)).toEqual(1)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 57)).toEqual(2)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 60)).toEqual(3)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 100)).toEqual(14)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 200)).toEqual(34)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 300)).toEqual(68)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 400)).toEqual(72)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 500)).toEqual(91)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 516)).toEqual(99)
})
test('findCurrentPhraseNum', () => {
	expect(findCurrentPhraseNum(phrases, 517)).toEqual(100)
})
