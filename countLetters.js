const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function countLetters(): Takes in a string and counts each letter, returns the count of each letter as an object.
// Parameters: string (letter, word, or sentence)
// Return value: object (count of each letter ex. 'LHL' { L: 2, H: 1} )

const countLetters = function(string) {
  let result = {}; // define empty object
  if (typeof string === "string") {
    for (let char of string) {
      if (char !== ' ') {
        if (result.hasOwnProperty( char )){
          result[char] += 1;
        } else {
          result[char] = 1;
        }
      }
    }
  } else {
    throw new Error('Please enter a string!')
  }
  return result;
};

// Test Case: ensure countLetters() is working
console.log(countLetters('LHLL'));
console.log(countLetters("lighthouse in the house"));
//console.log(countLetters(123));
console.log(countLetters(''));
console.log(countLetters('    '));
console.log(countLetters('$$  & * * *  #')); // Test Case: ensure symbols are counted properly

// Test Case: Assertion tests
const assertSentence = "lighthouse in the house";
result = countLetters(assertSentence);
assertEqual(result["l"], 1)
assertEqual(result['h'], 4)


// Test Case: ensure original string is not changed => should PASS
const sentence = 'bees bumble in the summer';
countLetters(sentence);
assertEqual(sentence,  'bees bumble in the summer')