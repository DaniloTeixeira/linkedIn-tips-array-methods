/*
  O método map é usado para aplicar uma função a cada elemento de um array e retornar um novo array com os resultados. A função passada como argumento para o método map é aplicada a cada elemento do array original e o resultado de cada chamada é adicionado a um novo array.  

  No exemplo abaixo, o método map é aplicado ao array "numbers" com uma função que multiplica cada elemento por 2. 
  O resultado é um novo array "double" com os elementos dobrados.  
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const double = numbers.map((number) => number * 2);

console.log(double); // Output: [2, 4, 6, 8, 10]
