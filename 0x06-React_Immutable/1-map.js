import { Map } from 'immutable';

// Function that converts a plain JavaScript object to an Immutable Map object
const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
