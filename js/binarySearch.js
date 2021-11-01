'use strict';

export default function guessNumber () {
  alert('загадайте число от 0 до 100');
  let start = 0;
  let end = 100;
  do {
    let middle = Math.floor((start + end) / 2);
    let isCorrect = confirm(`Ваше число меньше или равно ${middle} ?`);
    if (isCorrect) {
      end = middle;
      let isGuess = confirm(`Ваше число ${middle} ?`);
      if (isGuess) {
        break;
      }
    } else {
      start = middle;
    }
  } while (start + 1 !== end);
  return alert(`Ваше число: ${end}`);
}
