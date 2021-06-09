"use strict";

const numberInMind = 0; // задуманное число

function guessNumber() {
  let start = 0;
  let end = 100;
  
  do {
    let middle = Math.floor((start + end) / 2);
    let isCorrect = confirm(`Ваше число меньше или равно ${middle} ?`)
    isCorrect ? end = middle : start = middle;
    if (middle === numberInMind) {
      return middle;
    }
  } while (start !== numberInMind || end !== numberInMind);
  return -1; // почему -1? я не помню :(
}

// guessNumber();

// если ошибиться и нажать неверно в confirm, хотя оно верно, то бесконечный цикл. Надо доделать
// хотя, будем считать, что пользователь не глупый
// ну да :DDD