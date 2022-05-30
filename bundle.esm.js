import matchAll from 'string.prototype.matchall';

/**
 * works for SRT, VTT, ASS
 * @param {string} timecode like `00:00:00.500` or `00:00.500` (hours is optional)
 * @returns {number} seconds like 1234.567
 * @example
 * parseTime('00:00:00.500') // 0.5
 */

const parseTimecode = timecode => {
  if (!timecode) return null;
  const number = Number(timecode);
  if (number >= 0) return number;

  if (typeof timecode === 'string') {
    const timeArray = timecode.replace(',', '.').split(':').reverse(); //reverse because 'hours' is optional and good if it at the end of array

    const [seconds, minutes, hours = '0'] = timeArray;
    const timeNumber = +seconds + +minutes * 60 + +hours * 60 * 60;
    return timeNumber;
  }
};
/**
 *
 * @param {string} inputSeconds
 * @example
 * formatSecondsToTime(225) // "3:45"
 */

const formatSecondsToTime = inputSeconds => {
  let totalSeconds = +inputSeconds.toFixed(0);
  const hours = Math.floor(totalSeconds / 3600);
  const hoursString = hours ? hours + ':' : '';
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const secondsString = seconds.toString().padStart(2, '0');
  return `${hoursString}${minutes}:${secondsString}`;
};
const findCurrentPhraseNum = (phrases, time) => {
  const findIndex = (array, time) => {
    return array.findIndex((elem, index, array) => {
      const {
        end: thisEnd
      } = elem;
      const {
        end: nextEnd
      } = array[index + 1] || Infinity;
      return time >= thisEnd && time <= nextEnd;
    }) + 1;
  };

  const findedIndex = findIndex(phrases, time);
  return findedIndex ? findedIndex : phrases.length - 1;
};
const extractVoiceTags = cueText => {
  const voiceRegex = new RegExp(/<v(\S+?)?\s+?(.+?)>([\s\S]+?)(<\/v>|$)/g);
  const matches = [...matchAll(cueText, voiceRegex)];
  if (!matches.length) return [{
    text: cueText
  }];else {
    const result = matches.reduce((prevItem, currentItem, index, array) => {
      const [matchString, classesString = '', name, text = ''] = currentItem;
      const {
        index: indexStartCurrent,
        input
      } = currentItem;
      const indexEndCurrent = indexStartCurrent + matchString.length;
      const classes = classesString ? classesString.trim().slice(1).split('.') : [];
      const {
        index: indexStartNext
      } = array[index + 1] || input.length;
      const curObj = [{
        voice: {
          name,
          classes
        },
        text: text.trim()
      }];

      if (indexEndCurrent < indexStartNext) {
        const text = input.slice(indexEndCurrent, indexStartNext).trim(); // between voices, without voice tag,

        if (text) curObj.push({
          text
        });
      }

      return [...prevItem, ...curObj];
    }, []);

    const textBeforeVoiceTags = () => {
      const {
        index: firstVoiceStartPosition
      } = matches[0];
      const text = cueText.slice(0, firstVoiceStartPosition).trim();
      return firstVoiceStartPosition > 0 && text ? [{
        text
      }] : [];
    };

    const textAfterVoiceTags = () => {
      const lastVoiceMatch = matches[matches.length - 1];
      const {
        index: lastVoiceStartPosition
      } = lastVoiceMatch;
      const [matchString = ''] = lastVoiceMatch;
      const lastVoiceEndPosition = lastVoiceStartPosition + matchString.length;
      const text = cueText.slice(lastVoiceEndPosition, cueText.length).trim();
      return lastVoiceEndPosition < cueText.length && text ? [{
        text
      }] : [];
    };

    return [...textBeforeVoiceTags(), ...result, ...textAfterVoiceTags()];
  }
};
const parseYamlParams = text => {
  const paramTemplate = /^(.+?):\s*(.+?)$/;
  const matches = [...text.matchAll(new RegExp(paramTemplate, 'gm'))];
  if (!matches) return null; // it is not params text

  const paramsObject = {};
  const linesArray = text ? text.split('\n') : [];
  let nextIntend = 0;
  let parentKey = '';
  linesArray.forEach((line, index, linesArray) => {
    const getIntendOfLine = index => {
      return linesArray?.[index]?.match(/^\s+/)?.[0]?.length || 0;
    };

    const intend = getIntendOfLine(index); // current line

    nextIntend = getIntendOfLine(index + 1) || 0;
    const paramMatch = line.match(paramTemplate);

    if (!paramMatch && parentKey) {
      // we have text line, and should put it to prev parent key
      const prevText = paramsObject[parentKey] || '';
      const isNotLastLine = intend === nextIntend;
      const lastSymbol = isNotLastLine ? '\n' : '';
      paramsObject[parentKey] = prevText + line?.trim() + lastSymbol;
    }

    let [, paramKey, paramValue] = paramMatch || [];
    paramKey = paramKey?.trim();
    paramValue = paramValue?.trim();

    if (paramKey && paramValue && !parentKey) {
      // whole line is a 1-st level param
      paramsObject[paramKey] = paramValue;
    }

    if (paramKey && paramValue && parentKey) {
      // array of params for parent key
      const prevArray = paramsObject[parentKey] || [];
      const newValue = {
        [paramKey]: paramValue
      };
      prevArray.push(newValue);
      paramsObject[parentKey] = prevArray;
    }

    if (paramKey && !paramValue) {
      // we have a key, but haven't value => it is parent key for next lines
      parentKey = paramKey;
    }

    if (nextIntend < intend) {
      // we had parentKey on prev step, but now should clear it because of intend
      parentKey = '';
    }
  });
  return paramsObject;
};

/**
 * UNIVERSAL PARSER FOR ALL KIND OF SUBTITLE FORMATS
 */
/* 
cueTemplates play 2 roles:
1) check subs type
2) extract data from it: identifier, start, end, body 
*/

const cueTemplates = {
  srt: /^(\d+\s+)(\d\d:\d\d:\d\d,\d\d\d)\s+-->\s+(\d\d:\d\d:\d\d,\d\d\d)\s+([\s\S]+?)[\n\r]{2}/gm,
  vtt: /^(.+[\n\r])?(\d?\d?:?\d\d:\d\d\.\d\d\d)\s+-->\s+(\d?\d?:?\d\d:\d\d\.\d\d\d).*?[\n\r]([\s\S]+?)[\n\r]{2}/gm,
  ass: /^(Dialogue: 0,)?(\d?\d:\d\d:\d\d\.\d\d),(\d?\d:\d\d:\d\d\.\d\d)(,Default,,0,0,0,,)? ?(.+?)$/gm,
  audacity: /^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)$/gm,
  // a little tricky, because floating part is optional
  unknown: /^(.+)$/gm
};
const positionInCueTemplate = {
  srt: {
    identifier: 1,
    start: 2,
    end: 3,
    body: 4
  },
  vtt: {
    identifier: 1,
    start: 2,
    end: 3,
    body: 4
  },
  audacity: {
    start: 1,
    end: 3,
    body: 5
  },
  ass: {
    start: 2,
    end: 3,
    body: 5
  },
  unknown: {
    body: 0
  }
};

const checkSubsType = text => {
  for (const subsType in cueTemplates) {
    const cueTemplate = cueTemplates[subsType];
    const match = text.match(cueTemplate) || [];

    if (match.length > 0) {
      return subsType;
    }
  }
}; // for examples, please read /tests/subtitles/


const parseSubs = (text, extractVoices = true) => {
  const subsType = checkSubsType(text);
  const indexes = positionInCueTemplate[subsType];
  const arrayOfMatches = [...matchAll(text + '\n\n', cueTemplates[subsType])];
  const subsObject = arrayOfMatches.map((elem, index) => {
    // difference between id/identifier: identifier in vtt can be any word, it used for styling in css
    // id is order number
    const id = index + 1;
    const identifier = indexes.identifier && elem[indexes.identifier] ? elem[indexes.identifier].trim() : '';
    const start = parseTimecode(elem[indexes.start]);
    const end = parseTimecode(elem[indexes.end]);
    const body = extractVoices ? extractVoiceTags(elem[indexes.body]) : elem[indexes.body];
    const currentSub = {
      id,
      identifier,
      start,
      end,
      body
    };
    if (!identifier) delete currentSub.identifier;
    if (!start && start !== 0) delete currentSub.start;
    if (!end && end !== 0) delete currentSub.end;
    return currentSub;
  });
  return subsObject;
};

// *** VTT ADVANCED PARSER (with INFO, CHAPTERS, COMMENTS, etc) *** //
const vttInfoTemplate = /^webvtt *-? *(.+)*[\n\r]([\s\S]+?)[\n\r]{2}/gim; // first block of document

const vttChapterTemplate = /^note chapter\s*[\n\r]([\s\S]+?)[\n\r]{2}/gim;
const vttCommentTemplate = /^note comment\s*[\n\r]([\s\S]+?)[\n\r]{2}/gim;

const parseVttCueMatchElem = (elem, id, extractVoices = true) => {
  const indexes = {
    identifier: 1,
    start: 2,
    end: 3,
    body: 4
  };
  const identifier = indexes.identifier && elem[indexes.identifier] ? elem[indexes.identifier].trim() : '';
  const start = parseTimecode(elem[indexes.start]);
  const end = parseTimecode(elem[indexes.end]);
  const body = extractVoices ? extractVoiceTags(elem[indexes.body]) : elem[indexes.body];
  const currentSub = {
    id,
    identifier,
    start,
    end,
    body
  };
  if (!identifier) delete currentSub.identifier;
  if (!start && start !== 0) delete currentSub.start;
  if (!end && end !== 0) delete currentSub.end;
  return currentSub;
};
/**
 *
 * @param {*} matchElem - is array after text.match
 * @returns object
 */


const parseCommentMatchElem = matchElem => {
  const [, text] = matchElem;
  return {
    text
  };
};

const parseInfoMatchElem = matchElem => {
  const [, topTitle, text] = matchElem;
  return {
    topTitle,
    ...parseYamlParams(text)
  };
};
/**
 *
 * @param {*} matchElem - is array after text.match
 * @returns object
 */


const parseChapterMatchElem = matchElem => {
  const [, chapterText] = matchElem;
  const parsedChapter = parseYamlParams(chapterText);
  let {
    start,
    end
  } = parsedChapter;
  start = parseTimecode(start);
  end = parseTimecode(end);
  if (start) parsedChapter.start = start;
  if (end) parsedChapter.end = end;
  return { ...parsedChapter
  };
}; // deprecated, use parseVtt.filter type === 'chapter'
// vtt supports comments, that is lines begin from NOTE
// we use them to put chapters info inside subs file
// for examples look at tests/subtitles/vttParseChapters.test.js


const parseChapters = text => {
  const chaptersMatch = [...text.matchAll(vttChapterTemplate)];
  const chapters = chaptersMatch.map(elem => parseChapterMatchElem(elem));
  return chapters;
};
/**
 * Advanced parser, to extract not only phrases, but also info, chapters, and comments
 */


const parseVtt = text => {
  const textArray = text.trim().split(/[\n\r]{2}/); // all regex templates are 'gmi'
  // global => then we use matchAll
  // multiline => then we add '\n\n'

  let cueId = 0;
  return textArray.map(elem => {
    let [matchElem] = [...matchAll(elem + '\n\n', vttInfoTemplate)];

    if (matchElem) {
      return {
        type: 'info',
        ...parseInfoMatchElem(matchElem)
      };
    }
    [matchElem] = [...matchAll(elem + '\n\n', vttChapterTemplate)];

    if (matchElem) {
      return {
        type: 'chapter',
        ...parseChapterMatchElem(matchElem)
      };
    }
    [matchElem] = [...matchAll(elem + '\n\n', cueTemplates.vtt)];

    if (matchElem) {
      cueId++;
      return {
        type: 'cue',
        ...parseVttCueMatchElem(matchElem, cueId)
      };
    }
    [matchElem] = [...matchAll(elem + '\n\n', vttCommentTemplate)];
    if (matchElem) return {
      type: 'comment',
      ...parseCommentMatchElem(matchElem)
    }; //else

    return {
      type: 'unknown',
      text: elem
    };
  });
};

const getRegexIndexes = (text, regex, label) => {
  return [...matchAll(text, regex)].map(elem => {
    const [outerText] = elem;
    const {
      index: startIndex
    } = elem;
    const endIndex = startIndex + outerText.length;
    return {
      label,
      indexes: [startIndex, endIndex]
    };
  });
};
/**
 * categorize every peace of text by regex patterns
 * stick a label (its type) to each part of text
 * @param {string} textInput
 * @param {object[]} patterns //  [ { label, regex, parser, replacers } ]
 * @param {string} pattern.label - name for particular block of text
 * @param {string} pattern.regex - regular expression that describes block of text
 * @param {function} pattern.parser - function (text){ returns object or array }
 * @param {function[]} pattern.replacers - array of functions(text){returns text after replacement}
 * @param {string} defaultLabel // for blocks without labels (not match regex)
 * @returns {object[]} [ { label, indexes, text, data } ]
 */


const parseText = (textInput, patterns, defaultLabel = 'uncategorized' // display = [ 'indexes', 'text', 'data' ]
) => {
  let array = patterns.reduce((prev, item) => {
    const {
      regex,
      label
    } = item;
    const indexes = getRegexIndexes(textInput, regex, label);

    if (label && label !== defaultLabel) {
      return [...prev, ...indexes];
    } else {
      return [...prev];
    }
  }, []); // categorized indexes

  const categorizedIndexes = array.sort((a, b) => a['indexes'][0] - b['indexes'][0]);
  const uncategorizedIndexes = // if there is no categorizedIndexes, all text is uncategorized
  categorizedIndexes.length === 0 ? [{
    label: defaultLabel,
    indexes: [0, textInput.length]
  }] : //looking for gaps between categorizedIndexes and collect them as 'uncategorized'
  categorizedIndexes.reduce((prev, currentItem, index, array) => {
    const [, currentItemEnd] = currentItem.indexes;
    const [nextItemStart] = array[index + 1] ? array[index + 1].indexes : [textInput.length];

    if (currentItemEnd + 1 !== nextItemStart && index < array.length) {
      return [...prev, {
        label: defaultLabel,
        indexes: [currentItemEnd, nextItemStart]
      }];
    } else {
      return [...prev];
    }
  }, []); // find  zero element, witch can be lost while reduce

  array = [...categorizedIndexes, ...uncategorizedIndexes].sort((a, b) => a['indexes'][0] - b['indexes'][0]);
  const [firstIndex] = array[0].indexes;

  if (firstIndex > 0) {
    const zeroElement = {
      label: defaultLabel,
      indexes: [0, firstIndex]
    };
    array.unshift(zeroElement);
  }

  const [, lastIndex] = array[array.length - 1].indexes;

  if (lastIndex < textInput.length) {
    const lastElement = {
      label: defaultLabel,
      indexes: [lastIndex, textInput.length]
    };
    array.push(lastElement);
  } // ===== return =====


  return array.map(elem => {
    const {
      label
    } = elem;
    const [startIndex, endIndex] = elem ? elem.indexes : [];
    const {
      parser,
      replacers = []
    } = patterns.find(elem => elem.label === label) || {};
    let text = textInput.slice(startIndex, endIndex);
    replacers.forEach(replacer => {
      text = replacer ? replacer(text) : text;
    });
    const data = parser ? parser(text) : null;
    return { ...elem,
      text,
      data
    };
  });
}; // regexes

export { checkSubsType, findCurrentPhraseNum, formatSecondsToTime, parseChapters, parseSubs, parseText, parseTimecode, parseVtt, parseYamlParams };
