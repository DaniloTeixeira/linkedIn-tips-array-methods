/*
  O método findIndex é similar ao método find, mas em vez de retornar o valor do primeiro elemento encontrado que satisfaz a condição especificada, ele retorna o índice desse elemento no array. Caso nenhum elemento seja encontrado, o método retorna -1.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const evenIndex = numbers.findIndex(number => number % 2 === 0);

console.log(evenIndex); // Output: 1
