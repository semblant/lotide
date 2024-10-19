// Function takes a sentence and returns the positions/indeces of each letter as an array
const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) { // loop over sentence to get each index #
    if (sentence[index] !== ' ') {
      if (results[sentence[index]]) { // if property already exists
        results[sentence[index]].push(Number(index)); // store current index into the empty array
      } else { // if property doesn't exist, add it
        const indArr = [];
        indArr.push(Number(index)); // store index in empty array
        results[sentence[index]] = indArr; // create the key-value pair
      }
    }
  }
  return results;
};

module.exports = letterPositions;