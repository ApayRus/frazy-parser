// import matchAll from "string.prototype.matchall";

const mediaRegex = new RegExp(
        /<p>\s*?\[\s*?media\s*?\|\s*?(\S+?)\s*\]\s*?<\/p>/g
    )
    //general quiz both: () and [] for make ids for them
const quizRegex = new RegExp(/<ul>(\s*<li>[\(\[][\s\S]*?[\]\)][\s\S]+?)<\/ul>/g)

const getRegexIndexes = (text, regex, label) => {
    return [...text.matchAll(regex)].map(elem => {
        const [outerText] = elem
        const { index: startIndex } = elem
        const endIndex = startIndex + outerText.length
        return { label, indexes: [startIndex, endIndex] }
    })
}

/**
 * categorize every peace of text by regex patterns
 * stick a label (its type) to each part of text
 * @param {string} textInput
 * @param {object} patterns // { media:{regex, parser}, quiz:{regex, parser} }
 * @param {string} defaultLabel // for blocks without labels (not match regex)
//  * @param {string[]} display - [ 'indexes', 'text', 'data' ]
 * @returns {object[]} [ { label, indexes, text, data } ]
 */
const parse = (
    textInput,
    patterns,
    defaultLabel = 'uncategorized'
    // display = [ 'indexes', 'text', 'data' ]
) => {
    let array = []
    for (let label in patterns) {
        const { regex } = patterns[label]
        const indexes = getRegexIndexes(textInput, regex, label)
        array.push(...indexes)
    }
    // categorized indexes
    const categorizedIndexes = array.sort(
        (a, b) => a['indexes'][0] - b['indexes'][0]
    )

    //looking for gaps between categorizedIndexes and collect them
    const uncategorizedIndexes = categorizedIndexes.reduce(
        (prev, currentItem, index, array) => {
            const [, currentItemEnd] = currentItem ?.indexes
            const [nextItemStart] = array[index + 1] ?.indexes || []

            if (currentItemEnd + 1 !== nextItemStart && index < array.length - 1) {
                return [
                    ...prev,
                    {
                        label: defaultLabel,
                        indexes: [currentItemEnd + 1, nextItemStart - 1]
                    }
                ]
            } else {
                return [...prev]
            }
        }, []
    )

    // find  zero element, witch can be lost while reduce
    array = [...categorizedIndexes, ...uncategorizedIndexes].sort(
        (a, b) => a['indexes'][0] - b['indexes'][0]
    )
    const [firstIndex] = array[0] ?.indexes
    if (firstIndex > 0) {
        const zeroElement = {
            label: defaultLabel,
            indexes: [0, firstIndex - 1]
        }
        array.unshift(zeroElement)
    }

    // ===== return =====
    return array.map(elem => {
        const [startIndex, endIndex] = elem ?.indexes || []
        const { parser } = patterns[elem.label] || {}
        const text = textInput.slice(startIndex, endIndex)
        const data = parser ? parser(text) : null
        return {...elem, text, data }
    })
}

// parsersByType

const quizParser = quizText => {
    const correctAnswers = []
    const firstCheckboxRegex = new RegExp(/<ul>\s*?<li>\s*?\[/)
    const type = quizText.match(firstCheckboxRegex) ? 'multiple' : 'single'
    const variantRegex = new RegExp(/<li>(.+?)<\/li>/g)
    const variantsMatch = [...quizText.matchAll(variantRegex)]
        // inside checkbox or radiobutton
    const answerSignRegex = new RegExp(/^\s*?[\(\[]([\s\S]*?)[\]\)]\s+?/)
    const variants = variantsMatch.map((elem, index) => {
        let [, text] = elem
        // console.log(text);
        const [, answerSign = ''] = text.match(answerSignRegex)
        if (answerSign.trim()) {
            correctAnswers.push('' + index)
        }
        text = text.replace(answerSignRegex, '')
        return { text }
    })

    return { variants, correctAnswers, type }
}

const mediaParser = mediaText => {
    const mediaRegex = new RegExp(/\[\s*?media\s*?\|\s*?(\S+?)\s*\]/)
    const mediaMatch = mediaText.match(mediaRegex)
    const [, path] = mediaMatch
    return { path }
}

export { parse, quizParser, mediaParser, mediaRegex, quizRegex }