import { is } from 'immutable';

/**
 * Function to check if two maps are equal.
 *
 * @param {Map} map1 - The first map to compare
 * @param {Map} map2 - The second map to compare
 * @return {boolean} Whether the two maps are equal
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
