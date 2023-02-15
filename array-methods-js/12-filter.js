/*
    O método filter é usado para filtrar elementos de um array com base em uma função de teste. 
    A função passada como argumento para o método filter é aplicada a cada elemento do array original e retorna true ou false. 
    Se a função retornar true para um determinado elemento, esse elemento será incluído no novo array retornado pelo método filter. 
    Se a função retornar false, o elemento será descartado.
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
