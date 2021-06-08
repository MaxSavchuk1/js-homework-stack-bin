"use strict";

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  do {
    let middle = Math.ceil((start + end) / 2);
    if (value === arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      end = middle - 1;
    }
    if (value > arr[middle]) {
      start = middle + 1;
    }
  } while (start <= end);
  return -1;
}

function guessNumber (number) {
  let start = 1;
  let end = 100;
  do {
    let middle = confirm(`Ваше число меньше или равно ${Math.ceil((start + end) / 2)} ?`)
    if (number === middle) { return }
  }
}