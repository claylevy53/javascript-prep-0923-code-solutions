/* exported tail */

function tail(array) {
  const afterFirst = [];
  for (let i = 1; i < array.length; i++) {
    afterFirst.push(array[i]);
  }
  return afterFirst;
}
