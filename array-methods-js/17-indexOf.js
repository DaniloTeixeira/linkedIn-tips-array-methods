/*
  O método indexOf é usado para encontrar o índice da primeira ocorrência de um determinado valor em um array. 
  Se o valor não for encontrado, o método retorna -1.

  O método pode receber dois parâmetros: o valor que se deseja buscar e um índice opcional para iniciar a busca.
  Caso não seja passado o índice inicial para realizar a busca, irá iniciar na posição 0 do array.
*/

const fruits = [ 'apple', 'banana', 'orange', 'grape', 'pineapple' ];

const index = fruits.indexOf('orange');

console.log(index); // Output: 2

