const without = require('../without');
const chai = require('chai');
const assert = chai.assert;


describe("#without", () => {
  it("returns the first array without items from the second", () => {
    const result = without(['1', '2', '3'], ['3']);
    assert.deepEqual(result, ['1', '2']);
  });

  it("returns the original array if no items match", () => {
    const result = without(['1', '2', '3'], [1]);
    assert.deepEqual(result, ['1', '2', '3']);
  });

  it("returns an empty array if all items are removed", () => {
    const result = without(['bootcamp', 'labs', 'lighthouse'],['bootcamp', 'labs', 'lighthouse']);
    assert.deepEqual(result, []);
  });

  it("should handle arrays with different data types", () => {
    const result = without(['bootcamp', 1, 2, 'labs'],[1, 'labs']);
    assert.deepEqual(result, ['bootcamp', 2]);
  });

  it("should return the original array even after function is applied", () => {
    // Test case: ensure original array is not modified
    const words = ['Hello', 'World', 'lighthouse'];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ['Hello', 'World', 'lighthouse']); // => should PASS to prove original array is not altered
  });

  it('should handle duplicates', () => {
    const duplicates =  [1, 2, 3, 3, 3, 4];
    const duplicatesResult = without(duplicates, [3]);
    assert.deepEqual(duplicatesResult, [1, 2, 4]);
  });

});