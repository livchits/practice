/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.
Fundamentals

https://www.codewars.com/kata/sum-the-strings/train/javascript
 */

const sumStr = (a, b) => String(Number(a) + Number(b));
