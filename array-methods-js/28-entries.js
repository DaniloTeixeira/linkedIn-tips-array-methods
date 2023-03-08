/*
  O método entries() é uma função nativa do JavaScript que retorna um objeto iterador que contém um par chave/valor para cada elemento presente em um objeto. Esse método pode ser usado em objetos literais, objetos criados a partir de classes ou funções construtoras, e em outros objetos que implementam a interface do iterador.

  O formato de cada par chave/valor retornado pelo método entries() é um array com dois elementos: o primeiro é a chave do objeto e o segundo é o valor correspondente.

  Com base no resultado, podemos ver que o método entries() retorna um array de arrays, onde cada array interno contém uma chave e um valor correspondente do objeto original. Esse método pode ser útil para iterar sobre todos os pares chave/valor de um objeto ou para converter um objeto em um array de pares chave/valor.
*/

const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);

console.log(entries);  // Output: [ ["a", 1], ["b", 2], ["c", 3] ]

/*
  O método entries() também está disponível para arrays em JavaScript. Ele funciona de forma semelhante ao método para objetos, mas em vez de retornar pares chave/valor, ele retorna pares índice/valor para cada elemento do array.

  O formato de cada par índice/valor retornado pelo método entries() é um array com dois elementos: o primeiro é o índice do elemento no array e o segundo é o próprio elemento.

  No exemplo abaixo, o método entries() é usado para extrair os pares índice/valor do array arr. O objeto iterador retornado pelo método é armazenado na variável entries, que é então percorrida usando um loop for..of.

  Dentro do loop, cada par índice/valor é desestruturado em duas variáveis: index e value. O valor de index é o índice atual do elemento no array, e o valor de value é o próprio elemento.

  O método entries() para arrays pode ser útil para percorrer todos os elementos de um array juntamente com seus índices ou para converter um array em um conjunto de pares índice/valor para manipulação posterior.
*/

const arr = [ "a", "b", "c" ];

const entriesArr = arr.entries();

for (let [ index, value ] of entriesArr) {
    console.log(index, value);
}

// Output:
// 0 "a"
// 1 "b"
// 2 "c"

