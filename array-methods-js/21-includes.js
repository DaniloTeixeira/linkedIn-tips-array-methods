/*
  O método includes é utilizado para verificar se um determinado elemento está presente em um array. Ele retorna true se o elemento estiver presente e false caso contrário.

  O método includes recebe um argumento que é o elemento que se deseja verificar se está presente no array.
*/

const numbers = [ 1, 2, NaN, 4, 5 ];

const hasNaN = numbers.includes(NaN);

console.log(hasNaN); // Output: true

/*
  É importante notar que o método includes faz uma comparação de igualdade estrita (===), e não ampla (==). Isso significa que o valor e o tipo do elemento que está sendo procurado devem ser os mesmos do elemento presente no array para que o método retorne true.
*/

const myArray = [ '10', 20, '30' ];

console.log(myArray.includes(10)); // Output: false
console.log(myArray.includes('10')); // Output: true
