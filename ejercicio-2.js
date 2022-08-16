//Ejercicio 2 - Algoritmo :
//Desarrolla un script que encuentre las cadenas de texto que sean palíndromos con más de 3 letras en el siguiente bloque de texto:
//anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero

const letters = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";
const arrayLetters = letters.split("");

const isPalindrome = (a, b) => {
  let strReverse = "";
  const string = arrayLetters.slice(a, b).join("");
  for (let i = string.length - 1; i >= 0; i--) {
    strReverse += string[i];
  }
  if (strReverse === string) {
    console.log(string, "es Palindrome")
  }
};


for (let i = 0; i < arrayLetters.length; i++) {
  for (let k = i + 3; k < arrayLetters.length; k++) {
    isPalindrome(i, k);
  }
}
