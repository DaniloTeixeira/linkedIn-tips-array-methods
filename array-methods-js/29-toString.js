/*
  O método toString() é usado para converter um array em uma string. Ele retorna uma string contendo os elementos do array separados por vírgulas.

  O método toString() também pode ser usado em arrays que contêm outros tipos de dados, como strings, objetos ou booleanos. Quando usado em um array que contém objetos, chamará o método toString() de cada objeto para convertê-lo em uma string.
*/

const arrayNumbers = [ 1, 2, 3, 4, 5 ];

const numbersAsString = arrayNumbers.toString();

console.log(numbersAsString); // Output: "1,2,3,4,5"

/*
  *** BÔNUS ***
  
  Você pode usar a função String() para converter um array em uma string, assim como o construtor String(). A diferença é que a função String() transforma o valor passado como parâmetro em uma string primitiva, enquanto o construtor String() é uma função construtora que cria um objeto String.
*/

const arrayNumbers2 = [ 1, 2, 3, 4, 5 ];

const numbersAsString2 = String(arrayNumbers2);

console.log(numbersAsString2); // Output: "1,2,3,4,5"
