const eqArrays = function(arr1, arr2) {
  if (arr1.length  !== arr2.length) { // check if arrays are the same length, else return false.
    console.log(`❌❌❌ Arrays are not equal: ${arr1} !== ${arr2}`); // not equal if they're not the same length
  }
  for (let i = 0; i < arr1.length; i++) { // loop through all elements
    // only need to use arr1.length as the condition since they should be the same length
    if (arr1[i] !== arr2[i]) {
      console.log(`❌❌❌ Arrays are not equal: ${arr1} !== ${arr2}`); // not equal if at least one value doesn't match
      return;
    }
  }
  console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`); // after checking all elements, they're equal
};


eqArrays([1, 2, 3], [1, 2, 3]); // => arrays should be equal
eqArrays([3, 2, 1], [1, 2, 3]); // => arrays should NOT be equal
eqArrays(['1', '2', '3'], ['1', '2', '3']); // => arrays should be equal
eqArrays(['1', '2', '3'], ['1', '2', 3]); // => arrays should NOT be equal