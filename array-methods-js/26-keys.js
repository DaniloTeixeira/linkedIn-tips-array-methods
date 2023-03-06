/*
  O método keys é um método JavaScript que retorna um novo objeto Array Iterator que contém as chaves dos índices do array. As chaves são números inteiros que representam os índices do array.
*/

const fruits = [ "banana", "maçã", "uva" ];
const iterator = fruits.keys();

console.log(iterator.next().value); // Output: 0

console.log(iterator.next().value); // Output: 1

console.log(iterator.next().value); // Output: 2

/*
  Neste exemplo, criamos um objeto Array Iterator com as chaves dos índices do array "fruits". Em seguida, usamos o método next do iterator para iterar pelas chaves e imprimir os índices do array. 
  Note que o método next retorna um objeto com uma propriedade value que contém o valor da chave.
*/