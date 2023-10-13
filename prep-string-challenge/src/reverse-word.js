/* exported reverseWord */

function reverseWord(word) {
  let ReversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    ReversedWord += word[i];
  }
  return ReversedWord;
}
