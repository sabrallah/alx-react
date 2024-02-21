import { Map } from 'immutable';

/**
 * Converts a regular object to an Immutable Map.
 * 
 * @param {Object} object - The object to be converted to an Immutable Map.
 * @returns {Map} - An Immutable Map representation of the input object.
 */
const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
