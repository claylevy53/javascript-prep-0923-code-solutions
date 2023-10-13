/* exported compact */

function compact(array) {
  const newArray = [];
  // itemsToRemove = [false, null, NaN, 0, -0, undefined, '']
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
