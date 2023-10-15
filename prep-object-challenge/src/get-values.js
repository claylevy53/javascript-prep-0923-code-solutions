/* exported getValues */

function getValues(object) {
  const getValues = [];
  for (const key in object) {
    getValues.push(object[key]);
  }
  return getValues;
}
