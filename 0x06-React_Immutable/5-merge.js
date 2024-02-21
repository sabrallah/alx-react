import { List, Map } from 'immutable';
/**
 * Concatenates two lists of elements.
 * @param {Array} page1 - The first page of elements.
 * @param {Array} page2 - The second page of elements.
 * @returns {List} - A new List containing the concatenated elements.
 */
export const concatElements = (page1, page2) => List(page1).concat(List(page2));

/**
 * Merges two maps of elements.
 * @param {Object} page1 - The first page of elements.
 * @param {Object} page2 - The second page of elements.
 * @returns {Map} - A new Map containing the merged elements.
 */
export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
