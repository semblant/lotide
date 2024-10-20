const findKey = require('../findKey');
const chai = require('chai');
const assert = chai.assert;


describe("#findKey", () => {
  const stars = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  };

  it("returns the first key that matches the condition", () => {
    // This test ensures that the callback is correctly applied to the object.
    const starsResults = findKey(stars, (x) => x.stars === 2);
    assert.strictEqual(starsResults, 'noma');
  });

  it("should handle empty objects", () => {
    // Test Case: ensure empty object and empty callback returns undefined
    const testObj = {};
    const resultTestObj = findKey(testObj, () => false);
    assert.strictEqual(resultTestObj, undefined);
  });

  it("returns undefined if no key matches the condition", () => {
    const resultNoMatch = findKey(stars, (x) => x.moons === 5);
    assert.strictEqual(resultNoMatch, undefined);
  });

});





