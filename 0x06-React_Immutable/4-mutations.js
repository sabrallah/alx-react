/**
 * This file contains two Immutable Maps: map and map2.
 * map contains a mapping of numbers to names.
 * map2 is created from map with mutations to update values at keys 2 and 4.
 */
import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
