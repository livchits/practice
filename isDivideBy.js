/* Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments. 
https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
*/

const isDivideBy = (number, a, b) => number % a == 0 && number % b == 0;
