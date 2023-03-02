/*
  O método copyWithin é um método que copia parte de um array para outra posição no mesmo array, sobrescrevendo os valores existentes. Ele não modifica o tamanho do array.

  A sintaxe é a seguinte:
  "array.copyWithin(target, start, end)"

  "target" é o índice para onde os valores serão copiados. Este argumento é obrigatório.
  "start" é o índice a partir do qual os valores serão copiados. Este argumento é opcional e tem um valor padrão de 0.
  "end" é o índice (exclusivo) até o qual os valores serão copiados. Este argumento é opcional e tem um valor padrão de array.length.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

numbers.copyWithin(0, 3);

console.log(numbers); // Output: [4, 5, 3, 4, 5]

/*
  No exemplo acima, copiamos os valores do índice 3 em diante (ou seja, 4 e 5) para o início do array (índice 0). O array original é modificado e agora começa com os valores 4 e 5. Observe que os valores originais nos índices 0 a 2 foram sobrescritos pelos valores copiados.
*/