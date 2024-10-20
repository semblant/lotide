/** Function countLetters(): Takes in a string and counts each letter, returns the count of each letter as an object.
*
* @param {string} string - the string to count
*
* @returns {Object} result - an object where the key is each letter and value is each time the letter appears
**/
const countLetters = function(string) {
  let result = {}; // define empty object
  if (typeof string === "string") {
    for (let char of string) {
      if (char !== ' ') {
        if (result[char]) {
          result[char] += 1;
        } else {
          result[char] = 1;
        }
      }
    }
  } else {
    throw new Error('Please enter a string!');
  }
  return result;
};

module.exports = countLetters;