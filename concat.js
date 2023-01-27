/* A função concat() do JavaScript é usada para unir dois ou mais arrays em um único array. Ela não modifica os arrays originais, mas cria uma nova instância com os elementos dos arrays passados como parâmetro. */

const fruits1 = [ "banana", "orange" ];
const fruits2 = [ "apple", "pear" ];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // ["banana", "orange", "apple", "pear"]

/* Neste exemplo, estamos usando o método concat para unir o array fruits1 e fruits2 em um único array chamado allFruits. */

/* Também é possível passar múltiplos arrays como parâmetros para a função concat, exemplo: */
const fruits3 = [ "banana", "orange" ];
const fruits4 = [ "apple", "pear" ];
const fruits5 = [ "mango" ];
const allFruits2 = fruits3.concat(fruits4, fruits5);
console.log(allFruits); // ["banana", "orange", "apple", "pear", "mango"]


/* A função também permite adicionar elementos individuais ao array, exemplo: */
const fruits6 = [ "banana", "orange" ];
const allFruits3 = fruits6.concat("apple", "pear");
console.log(allFruits); // ["banana", "orange", "apple", "pear"]