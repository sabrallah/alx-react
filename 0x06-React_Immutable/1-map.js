import { fromJS } from 'immutable';

/**
 * Accesses an immutable object using the provided array of keys.
 *
 * @param {Object} object - The immutable object to access
 * @param {Array} array - The array of keys to access the object
 * @return {*} The value located at the specified keys in the object, or undefined if not found
 */
export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
