#! npm test ./tests/3-file-extension.js

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {
  //split the filename string to array
  var characters = filename.split(".")
  //if the length of the string is 2
  //return the second element
  return (characters.length === 2 ? characters[1] : false); 
  
}
