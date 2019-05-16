/*Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.
Example
charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
 */
function charFreq(message) {
  const objeto = {};
  for (let letra of message) {
    if (objeto.hasOwnProperty(letra)) {
      objeto[letra]++;
    } else {
      objeto[letra] = 1;
    }
  }
  return objeto;
}
