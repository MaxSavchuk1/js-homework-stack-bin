"use strict";

const numberInMind = 86; // задуманное число

function guessNumber() {
  let start = 1;
  let end = 100;
  
  do {
    let middle = Math.floor((start + end) / 2);
    let isCorrect = confirm(`Ваше число меньше или равно ${middle} ?`)
    isCorrect ? end = middle : start = middle;
    if (middle === numberInMind) {
      return middle;
    }
  } while (start !== numberInMind || end !== numberInMind);
  return -1; // почему -1?
}
// когда нажимать неверно, хотя оно верно, то бесконечный цикл. Надо доделать