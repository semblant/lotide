const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;


describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    // Test Case: Checking that a 2-element array returns an empty array
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    // Test Case: Checking that a 5-element array returns the middle element
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns '@' for ['&','@','$']", () => {
    // Test Case: Checking that a 6-element array returns the two middle elements
    assert.deepEqual(middle(['&','@','$']), ['@']);
  });

  it("returns 'Hello' for [1, 2, 'Hello', 10, 14]", () => {
    // Test Case: Checking that a 5-element array with tect returns the middle element
    assert.deepEqual(middle([1, 2, "Hello", 10, 14]), ["Hello"]);
  });

  it("returns [1, 2, 3, 'Hello', 4, 6] for [1, 2, 3, 'Hello', 4, 6]", () => {
    // Test Case: check the original array has not been changed.
    const testArr = [1, 2, 'Hello', 4, 6];
    middle(testArr);
    assert.deepEqual(testArr, [1, 2, "Hello", 4, 6]);
  });
});