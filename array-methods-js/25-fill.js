/*
  O método fill é um método que preenche todos os elementos de um array com um valor específico. Ele modifica o array original e retorna o mesmo array.

  A sintaxe é a seguinte: array.fill(value, start, end)

  "value" é o valor com o qual os elementos do array serão preenchidos. Este argumento é obrigatório.
  "start" é o índice a partir do qual os elementos serão preenchidos. Este argumento é opcional e tem um valor padrão de 0.
  "end" é o índice (exclusivo) até o qual os elementos serão preenchidos. Este argumento é opcional e tem um valor padrão de array.length.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

numbers.fill(100, 2, 4);

console.log(numbers); // Output: [1, 2, 100, 100, 5]
