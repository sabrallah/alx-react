import { fromJS } from 'immutable';

/**
 * Accesses nested properties in an Immutable object
 * @param {Object} object - The Immutable object to access
 * @param {Array} array - An array representing the path to the nested property
 * @returns The value of the nested property or undefined if not found
 */
export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
