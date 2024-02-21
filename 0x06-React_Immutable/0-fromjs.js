import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object into an Immutable.js object.
 *
 * @param {Object} object - the JavaScript object to be converted
 * @return {Immutable.Map} an Immutable.js object
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
