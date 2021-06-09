"use strict";

//в файле index.js лежат классы для стека

function isPalindrome(str) {
  const palindrome = new Stack();
  const strArray = Array.from(str.toLowerCase()).filter(item => item !== ' ');
  // return strArray.join('') === strArray.reverse().join(''); // и не надо стека :DD
  for (let i = 0; i < strArray.length - i; i++) {
    palindrome.push(strArray[i]);
    if (strArray[i] === strArray[strArray.length - 1 - i]) {
      palindrome.pop();
    }
  }
  return palindrome.isEmpty;
}

console.log('Палиндром ли слово "tenet"? >>', isPalindrome('tenet'));
console.log('isPalindrome("clock") :>> ', isPalindrome("clock"));
console.log('isPalindrome("Аргентина манит негра") :>> ', isPalindrome("Аргентина манит негра"));