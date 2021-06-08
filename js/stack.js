"use strict";

//в файле index.js лежат классы для стека

function isPalindrome(str) {
  const palindrome = new Stack();
  const strArray = Array.from(str.toLowerCase()).filter(item => item !== ' ');
  // return strArray.join('') === strArray.reverse().join(''); // и не надо стека :DD
  
}