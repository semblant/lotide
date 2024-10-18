const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    // Test case: head function with a normal array
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    // Test case: head function with a single element array
    assert.strictEqual(head(['5']), '5');
  });

  it("returns '&' for ['&','@','$']", () => {
    // Test case: head function with an array of special characters
    assert.strictEqual(head(['&','@','$']), '&');
  });

  it("returns 'undefined' for []", () => {
    // Test case: head function with an empty array
    assert.strictEqual(head([]), undefined);
  });

});