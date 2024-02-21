import { Seq } from 'immutable';

/**
 * Prints the best students from the given object.
 *
 * @param {object} object - The object containing student information
 * @return {undefined} This function does not return a value
 */
export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  /**
   * A function to capitalize the first letter of a string.
   *
   * @param {string} string - the input string
   * @return {string} the input string with the first letter capitalized
   */
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}
