/* 
    Problem requires a solution that finds every possible word in a string, the 
    word length must be > 3. We create an array from the original string and
    iterate with 2 indexes to find every possible word within the array:

    1. Divide the string into a list: "abcdefg" -> ["a","b","c","d","e","f", "g"]

    2. Select a pivot (index i) and a moving index (j) to form a 3 letter word 
       and check if its a palindrome: [..{abc}.., "d", "e","f", "g"] -> isPalindrome("abc")

    3. Evaluate the next word (j+1): [..{abcd}.., "e","f", "g"] -> isPalindrome("abcd")
       until we reach the end of the array.

    4. Move the pivot (i+1) and repeat from 2: ["a", ..{bcd}.. , "e","f", "g"] -> isPalindrome("bcd")
*/
const letters = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";
const arr = letters.split("");

// isPalindrome receives a string and check if it's a palindrome.
const isPalindrom = (str) => {
  let strReverse = str.split("").reverse().join("")
  return strReverse === str
};

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 3; j < arr.length; j++) {
    let word = arr.slice(i, j).join("")
    if (isPalindrom(word)) {
        console.log(`${word} is a palindrome.`)
    }
  }
}

