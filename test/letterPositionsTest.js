const letterPositions = require('../letterPositions');
const chai = require('chai');
const assert = chai.assert;


describe("#letterPositions", () => {
  it("returns correct position array of specified letter: ['hello'].l === [2, 3] && handles repeated letters", () => {
    const result = letterPositions('hello').l;
    assert.deepEqual(result, [2, 3]);
  });

  it("should ignore spaces", () => {
    const result = letterPositions('hello world');
    assert.deepEqual(result, {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10]
    });
  });
  it("returns an empty object for an empty string", () => {
    const result = letterPositions(' ');
    assert.deepEqual(result, {});
  });

  it("should handle punctuation", () => {
    const result = letterPositions('hello!');
    assert.deepEqual(result, {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
      '!': [5]
    });
  });

  it("should allow for upper and lower case letters", () => {
    const result = letterPositions('Hello there');
    assert.deepEqual(result, {
      H: [0],
      e: [1, 8, 10],
      l: [2, 3],
      o: [4],
      t: [6],
      h: [7],
      r: [9]
    });
  });

  it("should return original sentence after function is applied", () => {
    // Test case: ensure original sentence is unchanged.
    const testSentence2 = 'lighthouse in the house?';
    letterPositions(testSentence2);
    assert.strictEqual(testSentence2, 'lighthouse in the house?');
  });

});


