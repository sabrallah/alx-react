import { List } from 'immutable';

/**
 * Returns a List object based on the input array.
 *
 * @param {Array} array - The input array
 * @return {List} The List object
 */
export function getListObject(array) {
  return List(array);
}
/**
 * Adds an element to the given list.
 *
 * @param {Array} list - The list to which the element will be added
 * @param {any} element - The element to be added to the list
 * @return {number} The new length of the list after the element is added
 */
export function addElementToList(list, element) {
  return list.push(element);
}
