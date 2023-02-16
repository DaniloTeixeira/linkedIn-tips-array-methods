/*
 O método forEach é usado para iterar sobre todos os elementos de um array e executar uma função para cada elemento, sem retornar um novo array. A função passada como argumento para o método forEach é chamada para cada elemento do array e recebe três argumentos: o elemento atual, o índice do elemento e o próprio array.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

numbers.forEach(function (element, index, array) {
    array[ index ] = element * 2;
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]

/*
 No exemplo acima, o método forEach é aplicado ao array "numbers" com uma função que atualiza o valor de cada elemento para o dobro do valor original. A função recebe três argumentos: o valor atual do elemento, o índice do elemento e o array original. A função então atualiza o valor do elemento usando o índice e o array original. Como resultado, o array "numbers" é atualizado com os novos valores [2, 4, 6, 8, 10]. Note que esse é um efeito colateral, pois o método forEach não retorna um novo array, mas atualiza diretamente o array original.
*/