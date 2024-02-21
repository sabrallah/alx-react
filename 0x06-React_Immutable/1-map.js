import { fromJS } from 'immutable';

/**
 * Accesses nested properties in an Immutable object based on an array of keys
 * @param {object} object - The Immutable object to access
 * @param {Array} array - An array of keys representing the path to the desired property
 * @returns {*} The value of the nested property or undefined if not found
 */
export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
