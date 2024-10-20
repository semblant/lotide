const chai = require('chai');
const countLetters = require('../countLetters');
const assert = chai.assert;

describe("#countLetters", () => {
  // Test Case: ensure function counts characters as expected
  it("returns { L: 3, H: 1 } when given the string 'LHLL'", () => {
    const letters = 'LHLL';
    const lettersResult = countLetters(letters);
    assert.deepEqual(lettersResult, { L: 3, H: 1 });

  });

  it("returns empty object when given an empty string", () => {
    // Test Case: ensure it returns empty when given empty string
    assert.deepEqual(countLetters('    '),{});
  });

  it("returns { '$': 2, '&': 1, '*': 3, '#': 1 } when given a symbol string", () => {
    // Test Case: ensure symbols are counted properly
    const symbols = '$$  & * * *  #';
    const symbolsResult = countLetters(symbols);
    assert.deepEqual(symbolsResult, { '$': 2, '&': 1, '*': 3, '#': 1 });
  });

  it("passes assertion when counting 'h' === 4 in string 'lighthouse in the house' ", () => {
    // Test Case: ensure object can be accessed using square bracket notation
    const assertSentence = "lighthouse in the house";
    const assertSentenceResult = countLetters(assertSentence);
    assert.strictEqual(assertSentenceResult['h'], 4);
  });

  it("returns the original array after applying the function", () => {
    // Test Case: ensure original string is not changed => should PASS
    const sentence = 'bees bumble in the summer';
    countLetters(sentence);
    assert.strictEqual(sentence,  'bees bumble in the summer');
  });

  it("throws error if string is not given", () => {
    // Test Case: ensure function handles the case where a string is not given
    const error = assert.throws(() => countLetters(124), Error);
    assert.strictEqual(error.message, 'Please enter a string!');
  });

});




