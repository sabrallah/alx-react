import { fromJS as convertToImmutable } from 'immutable';

/**
 * Accesses an immutable object based on the provided array path
 * @param {Object} object - The immutable object to access
 * @param {Array} path - The array path to access the object
 * @returns {any} The value found at the specified path or undefined if not found
 */
export default function accessImmutableObject(object, path) {
  const mappedObj = convertToImmutable(object);

  return mappedObj.getIn(path, undefined);
}
