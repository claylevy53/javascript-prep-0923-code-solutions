/* exported isVowel */

function isVowel(char) {
  const lowerChar = char.toLowerCase();
  if (
    lowerChar === 'a' ||
    lowerChar === 'e' ||
    lowerChar === 'i' ||
    lowerChar === 'o' ||
    lowerChar === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
