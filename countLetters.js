// Function countLetters(): Takes in a string and counts each letter, returns the count of each letter as an object.
// Parameters: string (letter, word, or sentence)
// Return value: object (count of each letter ex. 'LHL' { L: 2, H: 1} )
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