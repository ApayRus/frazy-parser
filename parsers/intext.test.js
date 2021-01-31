import {
    parse,
    quizParser,
    mediaParser,
    mediaRegex,
    quizRegex
} from './intext.js'

const html = `<p>Question 1. Multiple choice </p>
<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 2. Single choice</p>
<ul>
<li>( ) variant 1</li>
<li>(o) variant 2</li>
<li>( ) variant 3</li>
</ul>
<p>Not a question. Just a list. </p>
<ul>
<li>Item One. </li>
<li>Item two. </li>
<li>Item three. </li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 3. Single choice</p>
<ul>
<li>( ) variant 1</li>
<li>( ) variant 2</li>
<li>(v) variant 3</li>
</ul>
<p>Question 4. Multiple choice </p>
<ul>
<li>[ ] variant 1</li>
<li>[x] variant 2</li>
<li>[ ] variant 3</li>
<li>[x] variant 4</li>
</ul>
<p>[media | pathToFile]</p>
<p>Question 5. Multiple choice as Q1</p>
<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>`

const quizText = `<ul>
<li>[v] variant 1</li>
<li>[ ] variant 2</li>
<li>[v] variant 3</li>
<li>[ ] variant 4</li>
</ul>`

const mediaText = `<p>[media | https://ru.wikipe-dia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%D1%81]</p>`

test('quizParser', () => {
    const quizData = {
        variants: [
            { text: 'variant 1' },
            { text: 'variant 2' },
            { text: 'variant 3' },
            { text: 'variant 4' }
        ],
        correctAnswers: ['0', '2'],
        type: 'multiple'
    }

    expect(quizParser(quizText)).toEqual(quizData)
})

test('inText parser', () => {
    const output = [{
            label: 'uncategorized',
            indexes: [0, 35],
            text: '<p>Question 1. Multiple choice </p>',
            data: null
        },
        {
            label: 'quiz',
            indexes: [36, 138],
            text: '<ul>\n<li>[v] variant 1</li>\n<li>[ ] variant 2</li>\n<li>[v] variant 3</li>\n<li>[ ] variant 4</li>\n</ul>',
            data: {
                variants: [{
                        text: 'variant 1'
                    },
                    {
                        text: 'variant 2'
                    },
                    {
                        text: 'variant 3'
                    },
                    {
                        text: 'variant 4'
                    }
                ],
                correctAnswers: ['0', '2'],
                type: 'multiple'
            }
        },
        {
            label: 'media',
            indexes: [139, 166],
            text: '<p>[media | pathToFile]</p>',
            data: {
                path: 'pathToFile'
            }
        },
        {
            label: 'uncategorized',
            indexes: [167, 199],
            text: '<p>Question 2. Single choice</p>',
            data: null
        },
        {
            label: 'quiz',
            indexes: [200, 279],
            text: '<ul>\n<li>( ) variant 1</li>\n<li>(o) variant 2</li>\n<li>( ) variant 3</li>\n</ul>',
            data: {
                variants: [{
                        text: 'variant 1'
                    },
                    {
                        text: 'variant 2'
                    },
                    {
                        text: 'variant 3'
                    }
                ],
                correctAnswers: ['1'],
                type: 'single'
            }
        },
        {
            label: 'uncategorized',
            indexes: [280, 389],
            text: '<p>Not a question. Just a list. </p>\n<ul>\n<li>Item One. </li>\n<li>Item two. </li>\n<li>Item three. </li>\n</ul>',
            data: null
        },
        {
            label: 'media',
            indexes: [390, 417],
            text: '<p>[media | pathToFile]</p>',
            data: {
                path: 'pathToFile'
            }
        },
        {
            label: 'uncategorized',
            indexes: [418, 450],
            text: '<p>Question 3. Single choice</p>',
            data: null
        },
        {
            label: 'quiz',
            indexes: [451, 530],
            text: '<ul>\n<li>( ) variant 1</li>\n<li>( ) variant 2</li>\n<li>(v) variant 3</li>\n</ul>',
            data: {
                variants: [{
                        text: 'variant 1'
                    },
                    {
                        text: 'variant 2'
                    },
                    {
                        text: 'variant 3'
                    }
                ],
                correctAnswers: ['2'],
                type: 'single'
            }
        },
        {
            label: 'uncategorized',
            indexes: [531, 566],
            text: '<p>Question 4. Multiple choice </p>',
            data: null
        },
        {
            label: 'quiz',
            indexes: [567, 669],
            text: '<ul>\n<li>[ ] variant 1</li>\n<li>[x] variant 2</li>\n<li>[ ] variant 3</li>\n<li>[x] variant 4</li>\n</ul>',
            data: {
                variants: [{
                        text: 'variant 1'
                    },
                    {
                        text: 'variant 2'
                    },
                    {
                        text: 'variant 3'
                    },
                    {
                        text: 'variant 4'
                    }
                ],
                correctAnswers: ['1', '3'],
                type: 'multiple'
            }
        },
        {
            label: 'media',
            indexes: [670, 697],
            text: '<p>[media | pathToFile]</p>',
            data: {
                path: 'pathToFile'
            }
        },
        {
            label: 'uncategorized',
            indexes: [698, 738],
            text: '<p>Question 5. Multiple choice as Q1</p>',
            data: null
        },
        {
            label: 'quiz',
            indexes: [739, 841],
            text: '<ul>\n<li>[v] variant 1</li>\n<li>[ ] variant 2</li>\n<li>[v] variant 3</li>\n<li>[ ] variant 4</li>\n</ul>',
            data: {
                variants: [{
                        text: 'variant 1'
                    },
                    {
                        text: 'variant 2'
                    },
                    {
                        text: 'variant 3'
                    },
                    {
                        text: 'variant 4'
                    }
                ],
                correctAnswers: ['0', '2'],
                type: 'multiple'
            }
        }
    ]

    expect(
        parse(html, {
            media: { regex: mediaRegex, parser: mediaParser },
            quiz: { regex: quizRegex, parser: quizParser }
        })
    ).toEqual(output)
})