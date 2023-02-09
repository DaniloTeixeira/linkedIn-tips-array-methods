/*
  O método sort é utilizado para ordenar elementos de um array em ordem crescente ou decrescente. Por padrão, o método sort classifica os elementos como strings, o que pode não ser o comportamento desejado para tipos de dados diferentes de string. É possível passar uma função de comparação personalizada como argumento para o método sort para controlar a forma como os elementos são classificados.
 */

const array = [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 ];

array.sort();

console.log(array); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

/*
 Para ordenar palavras em ordem alfabética, você pode passar uma função de comparação personalizada para o método sort. Essa função deve comparar dois elementos do array e retornar um número negativo, zero ou positivo, dependendo de qual elemento deve vir primeiro na ordem classificada.
 */

const arrayWords = [ "dog", "cat", "apple", "banana" ];

arrayWords.sort((a, b) => a.localeCompare(b));

console.log(arrayWords); // Output: ["apple", "banana", "cat", "dog"]

/*
 No exemplo acima, a função de comparação retorna o resultado da chamada do método localeCompare, em cada par de elementos. O método localeCompare compara strings com base na ordem alfabética local e retorna um número negativo se a primeira string vier antes da segunda string, zero se as strings forem iguais e um número positivo se a primeira string vier depois da segunda string. Ao passar essa função de comparação para o método sort, as palavras são classificadas em ordem alfabética. 
 */