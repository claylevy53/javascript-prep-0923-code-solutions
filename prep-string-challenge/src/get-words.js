/* exported getWords */

function getWords(string) {
  let splitWords = [];
  if (string.length === 0) {
    return splitWords;
  }
  splitWords = string.split(' ');
  return splitWords;
}
