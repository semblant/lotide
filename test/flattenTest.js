const flatten = require('../flatten');
const chai = require('chai');
const assert = chai.assert;


describe("#flatten", () => {
  it("returns [1, 2, 'Hello', 4, 5, 6] for [1, 2, 'Hello', [4, 5], 6]", () => {
    // Test Case: esnure it handles a nested array
    const nestedArray = [1, 2, 'Hello', [4, 5], 6];
    const nestedArrayResults = flatten(nestedArray);
    assert.deepEqual(nestedArrayResults, [1, 2, 'Hello', 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 'Hello' , 'World'] for [1, 2, [3, 4], 5, ['Hello', 'World']]), [1,2,[3,4]]", () => {
    // Test Case: esnures it handles a multi-level nested array properly
    const multiNestedArray = [1, 2, [3, 4], 5, ["Hello", "World"]];
    const multiNestedArrayResults = flatten(multiNestedArray);
    assert.deepEqual(multiNestedArrayResults, [1, 2, 3, 4, 5, 'Hello' , 'World']);
  });

  it('return an empty array if given an empty array', () => {
    // Test Case: handles empty arrays properly
    const empty = [];
    const emptyResults = flatten(empty);
    assert.deepEqual(emptyResults, []);
  });

  it("keeps original array intact after function has been applied", () => {
    // Test case: checking original array is unchanged
    const testArr = [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']];
    flatten(testArr);
    assert.deepEqual(testArr, [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']]);
  });

});