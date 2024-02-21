// 0-fromjs.js

const Immutable = require('immutable');

function getImmutableObject(object) {
  // Converting the object into an immutable Map using fromJS
  const immutableMap = Immutable.fromJS(object);

  return immutableMap;
}

// Example usage
const inputObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const result = getImmutableObject(inputObject);
console.log(result);
