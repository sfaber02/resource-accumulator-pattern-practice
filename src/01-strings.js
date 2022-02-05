/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let newString = ''
  for (let word of words){
    newString += word;
  }
  return newString;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let repeatArray = [];
  for (let word of words){
    repeatArray.push(`${word}${word}`);
  }
  return repeatArray;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let smallArray = [];
  for (let word of words){
    if (word.length <= 4) smallArray.push(word);
  }
  return smallArray;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for (let word of words){
    if (word.includes(character)) return word;
  }
  return null;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for (let word of words){
    for(let char of word){
      if (/[a-z]/.test(char)) return false;
    }
  }
  return true;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  return words.sort((a, b) => b.length - a.length)[0]
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
