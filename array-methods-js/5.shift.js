/*
  A função shift remove o primeiro elemento do array e retorna o valor removido. Além disso, também é responsável por atualizar os índices restantes do array para manter a continuação da ordem. 
  
  Confira abaixo, um exemplo de como a função shift pode ser utilizada:
 */

const numbers = [ 1, 2, 3, 4, 5 ];
const firstElement = numbers.shift();

console.log(firstElement); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

/*
  Neste exemplo, a primeira chamada à função shift retorna o primeiro elemento do array numbers, que é o número 1. 
  Em seguida, o array numbers é atualizado para remover o primeiro elemento e manter a continuação dos índices. 
  Quando o array é impresso, você pode ver que o primeiro elemento foi removido e o restante dos elementos foram atualizados.
 */