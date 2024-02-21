import { fromJS } from 'immutable';

// Convert a plain JavaScript object to an Immutable object
const getImmutableObject = (data) => fromJS(data);

export default getImmutableObject;
