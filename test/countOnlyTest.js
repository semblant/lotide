const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;


describe("#countOnly", () => {
  it("returns proper count for 'Fang' when Fang appears twice in the object ", () => {
    // Test Case: ensure the function counts the names properly
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns an empty object when given an empty object", () => {
    // Test Case: handles an empty object properly
    const empty = {};
    const emptyResults = countOnly(empty, '');
    assert.deepEqual(emptyResults, {});
  });

  it("returns undefined for a name that doesn't exist", () => {
    // Test Case: returns undefined when the name doesn't exist
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    assert.strictEqual(result1["Karima"], undefined);
  });

});


