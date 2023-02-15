/*
  O método slice permite retornar uma fatia (substring) de uma string original. 
  A sintaxe é a seguinte: string.slice(start, end), onde "start" é o índice inicial da substring desejada e "end" é o índice final (não inclusivo). 
  Se o índice final não for especificado, a substring incluirá todos os caracteres restantes da string original.

  No exemplo abaixo, o método slice é aplicado à string "Hello, World!" com os argumentos "7" e "12". Isso retorna a substring "World".
 */

const str = "Hello, World!";
const slicedStr = str.slice(7, 12);

console.log(slicedStr); // Output: "World"