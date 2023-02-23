/*
  O método find é usado para encontrar o primeiro elemento em um array que satisfaz uma condição especificada. Ele retorna o valor do primeiro elemento encontrado, ou undefined caso nenhum elemento seja encontrado.

  É importante notar que o método find para assim que encontra o primeiro elemento que satisfaz a condição, e não continua procurando pelo restante do array. 
*/

const numbers = [ 0, 1, 2, 3, 4, 5 ];

const oddNumber = numbers.find(number => number % 2 !== 0);

console.log(oddNumber); // Output: 1


// No exemplo acima, o método find é aplicado ao array "numbers" para buscar o primeiro número ímpar. 
