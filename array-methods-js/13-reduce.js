/*
  O método reduce é usado para reduzir todos os elementos de um array a um único valor, aplicando uma função acumuladora a cada elemento e armazenando o resultado em um acumulador. 
  O resultado final do método reduce é o valor final do acumulador.

  A função acumuladora recebe dois argumentos: o acumulador e o elemento atual do array. 
  O acumulador armazena o resultado da última chamada da função acumuladora e é inicializado com um valor inicial opcional passado como segundo argumento do método reduce.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
