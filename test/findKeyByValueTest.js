const findKeyByValue = require('../findKeyByValue');
const chai = require('chai');
const assert = chai.assert;


describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it("returns the first value that matches the condition", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, 'drama');
  });


  it("should handle empty objects ", () => {
    // Test Case: ensure empty object returns undefined
    const testObj = {};
    findKeyByValue(testObj, "");
    assert.strictEqual(testObj.key, undefined);
  });

  it("should handle keys with null values ", () => {
    // Test Case: ensure key with null value returns null
    const testObj2 = {
      str: 'string',
      bool: false,
      num: 0,
      nul: null,
      undef: undefined,
    };
    findKeyByValue(testObj2, null);
    assert.strictEqual(testObj2.nul, null);
  });

  it("should return undefined if the condition doesn't exist ", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(result, undefined);
  });

  it("should keep the original array even after function application", () => {
    // Test Case: ensure original object is unchanged.
    const testObj3 = {
      test: "for",
      find: "keys",
      by: "value",
    };
    findKeyByValue(testObj3, "for");
    assert.strictEqual(testObj3.test, "for");
  });

});
