/*
  O método every é usado para verificar se todos os elementos de um array passam em um teste especificado em uma função. O método every retorna um valor booleano: true se todos os elementos passarem no teste, e false caso contrário.
  
  A função passada como argumento para o método every é chamada para cada elemento do array e recebe três argumentos: o elemento atual, o índice do elemento e o próprio array. A função retorna um valor booleano: true se o elemento passar no teste, e false caso contrário.
*/

const numbers = [ 2, 4, 6, 8, 10 ];

const allEven = numbers.every((number) => number % 2 === 0);

console.log(allEven); // Output: true

/*
  No exemplo acima, o método every é aplicado ao array "numbers" com uma função que verifica se todos os elementos são números pares. Como todos os elementos são números pares, a função retorna true e a saída seria true. Note que o método every para de percorrer o array assim que encontra um elemento que não passa no teste.
*/