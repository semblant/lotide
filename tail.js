/**
 * The tail function takes an array and returns all items without the first element
 *
 * @param {Array} arr - The input array.
 *
 * @returns {Array} tailArr - Returns a new array with all elements except the first.
 *
 **/
const tail = (arr) => {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) tailArr.push(arr[i]);
  return tailArr;
};

console.log(tail('hello'));

module.exports = tail;