/* exported getKeys */

function getKeys(object) {
  const keyArray = [];
  for (const _ in object) {
    keyArray.push(_);
  }
  return keyArray;
}
