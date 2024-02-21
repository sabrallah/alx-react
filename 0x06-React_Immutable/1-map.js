import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObj = Map(object);

  return mappedObj.getIn(array, undefined);
}
