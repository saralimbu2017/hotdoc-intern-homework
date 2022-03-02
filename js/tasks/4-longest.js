#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
    //declare a variable as longestString
    var longestString = "";
    //loop through the array of strings
     
    strings.forEach( currentElement => {
      //check if data type of each element  is string
      // compare its length with longestString length
      //if it's length is greater longest string is current element.
      if(typeof(currentElement) === 'string' && currentElement.length > longestString.length) {
        longestString = currentElement;
      }
    })
   return longestString;
}
