/*
  O método splice é utilizado para adicionar ou remover elementos de um array. 
  
  A sintaxe é a seguinte: array.splice(start, deleteCount, item1, item2, ...), onde "start" é o índice no array onde a adição ou remoção de elementos deve começar, "deleteCount" é o número de elementos a serem removidos e "item1, item2, ..." são os elementos a serem adicionados ao array 
 */

const myArray = [ 1, 2, 3, 4, 5 ];
myArray.splice(2, 0, 6, 7);

console.log(myArray); // Output: [1, 2, 6, 7, 3, 4, 5]

/*
  No exemplo acima, o método splice é aplicado ao array [1, 2, 3, 4, 5] com os argumentos "2", "0" e "6" e "7". Isso adiciona os elementos "6" e "7" ao array a partir do índice 2, sem remover nenhum elemento. O resultado seria o array [1, 2, 6, 7, 3, 4, 5].
 */