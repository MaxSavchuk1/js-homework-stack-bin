'use strict';
import Stack from './stack.js';

function isPalindrome (str) {
  if (typeof str !== 'string') {
    throw new Error('Error! Value must be a string!');
  }
  const palindrome = new Stack();

  const strArray = str
    .toLowerCase()
    .replace(/\s/g, '')
    .split('');

  for (const i of strArray) {
    palindrome.push(i);
  }

  for (const i of strArray) {
    if (i === palindrome.peek) {
      palindrome.pop();
    }
    // else {
    //   return false;
    // }
  }
  return palindrome.isEmpty;
}

try {
  const someConst = { tenet: 'tenet' };
  isPalindrome(someConst);
} catch (e) {
  console.error(e.message);
}

console.log('clock :>> ', isPalindrome('clock'));
console.log(
  'Аргентина манит негра :>> ',
  isPalindrome('Аргентина манит негра')
);
console.log(`И у облаков вокал Боуи`, isPalindrome('И у облаков вокал Боуи'));
