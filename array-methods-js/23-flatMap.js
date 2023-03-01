/*
  O método flatMap() é uma combinação do método map() e do método flat(). Ele mapeia cada elemento do array para um novo valor com base em uma função de retorno de chamada e, em seguida, achatando o resultado em um único array.

  O método flatMap() funciona da seguinte forma: primeiro, para cada elemento do array original, é chamada a função de retorno de chamada (callback) fornecida como argumento. O valor de retorno da função de retorno de chamada é um novo array. Em seguida, todos os arrays retornados são concatenados em um único array, usando o método flat().
*/

const arr = [ 1, 2, 3 ];

const resultWithMap = arr.map(x => [ x * 2 ]);
console.log(resultWithMap); // Output: [[2], [4], [6]]


const resultWithFlatMap = arr.flatMap(x => [ x, x * 2 ]);
console.log(resultWithFlatMap); // Output: [2, 4, 6]