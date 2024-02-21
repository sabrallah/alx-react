import { fromJS } from 'immutable';

/**
 * Converts a regular JavaScript object to an Immutable object.
 * @param {Object} object - The JavaScript object to convert.
 * @returns {Immutable} - The Immutable object.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
