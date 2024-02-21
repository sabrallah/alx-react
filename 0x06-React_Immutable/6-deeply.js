import { Map } from 'immutable';

/**
 * Merge the elements of two maps deeply.
 *
 * @param {Object} page1 - The first map to merge
 * @param {Object} page2 - The second map to merge
 * @return {Map} - The result of merging the two maps deeply
 */
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
