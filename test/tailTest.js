const chai = require('chai');
const tail = require('../tail');
const assert = chai.assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    // Test Case: Testing the equality of 2 string arrays.  It is always false. Need to find a workaround.
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    // Test case 2: Check returned array elements of string array.
    const resultStringArray = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(resultStringArray.length, 2);
    assert.deepEqual(resultStringArray[0], "Lighthouse");
    assert.deepEqual(resultStringArray[1], "Labs");
  });

  it("returns 'undefined' for []", () => {
    // Test case: Check returned array elements of empty array
    const resultEmptyArray = tail([]);
    assert.deepEqual(resultEmptyArray.length, 0);
    assert.deepEqual(resultEmptyArray[0], undefined);
  });

  it("returns 'undefined' for ['Hello']", () => {
    // Test case: Check returned array elements of 1-element array
    const resultOneElementArray = tail(["Hello"]);
    assert.deepEqual(resultOneElementArray.length, 0);
    assert.deepEqual(resultOneElementArray[0], undefined);
  });

  it('returns ["phone", "computer", "charger"] for ["phone", "computer", "charger"]', () => {
    // Test case: check if original array is not modified
    const items = ["phone", "computer", "charger"];
    tail(items);
    assert.deepEqual(items.length, 3);

  });
});