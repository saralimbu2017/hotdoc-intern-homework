#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
  //declare a variable sum
  var sum = 0;
  startOfTree.forEach( element => {
    //check if current element is number
    //add it to sum
    if(typeof(element) === 'number') {
      sum += element;
    } else if (Array.isArray(element)) {
      //if current element is array
      //call function recursively
      sum += arraySum(element);
    }
  });
  return sum;
}
