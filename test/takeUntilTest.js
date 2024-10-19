const takeUntil = require('../takeUntil');
const chai = require('chai');
const assert = chai.assert;


describe("#takeUntil", () => {
  it("should return the array when the callback function is truthy: (char) => char === ','", () => {
    // This test ensures that the takeUntil function applies the callback correctly to each element in the array
    const sentence = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const sentenceResults = takeUntil(sentence, char => char === ',');
    assert.deepEqual(sentenceResults, ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it("returns an empty array when given an empty array", () => {
    // This test ensures that the takeUntil function handles empty arrays.
    const empty = [];
    const emptyResults = takeUntil(empty, x => x + 1);
    assert.deepEqual(emptyResults, []);

  });

  it("should return the original array after function is applied", () => {
    // This test ensures that takeUntil function doesn't change the original array.
    const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    takeUntil(numbers, x => x < 0);
    assert.deepEqual(numbers, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });

  it("returns the entire array if the callback never satisfies 'truthy;", () => {
    const nums = [1, 2, 3, 4];
    const numsResult = takeUntil(nums, (x) => x > 5);
    assert.deepEqual(numsResult, nums);
  });

});
