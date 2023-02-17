/*
  O método some é usado para verificar se pelo menos um elemento de um array passa em um teste especificado em uma função. Ele retorna um valor booleano: true se pelo menos um elemento passar no teste, e false caso contrário.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const hasEven = numbers.some((number) => number % 2 === 0);

console.log(hasEven); // Output: true

/*
  No exemplo acima, o método some é aplicado ao array "numbers" com uma função que verifica se pelo menos um elemento é par. Como o array contém o número 2, que é um número par, a função retorna true e a saída seria true. Note que o método some para de percorrer o array assim que encontra um elemento que passa no teste
*/