/* eslint-disable no-unused-vars */
/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

https://www.codewars.com/kata/array-plus-array/train/javascript
*/

function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((a, b) => a + b);
  const sum2 = arr2.reduce((a, b) => a + b);

  return sum1 + sum2;
}

/*versión usando concat

const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((a, b) => a + b);
*/
