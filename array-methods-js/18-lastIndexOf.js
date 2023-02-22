/*
  O método lastIndexOf é similar ao método indexOf, mas em vez de encontrar a primeira ocorrência de um valor em um array, ele retorna o índice da última ocorrência do valor especificado no array, ou -1 se o valor não for encontrado.

  O método pode receber dois parâmetros: o valor que se deseja buscar e um índice opcional para iniciar a busca a partir do final do array.

  PS: O méto é case sensitive. Se no exemplo abaixo, for feita a busca com a string "Laranja", irá reornar -1, por causa do "L" maiúsculo.
*/

const fruits = [ 'maçã', 'banana', 'laranja', 'uva', 'abacaxi', 'laranja' ];

const lastIndex = fruits.lastIndexOf('laranja');

console.log(lastIndex); // Output: 5

