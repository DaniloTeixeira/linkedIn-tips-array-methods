/*
  O método flat() é utilizado para "achatar" (ou "nivelar") um array que contém elementos aninhados em   um único array. Ele retorna um novo array com todos os elementos dos arrays aninhados concatenados em   um único array.

  No exemplo abaixo, o array "arr" contém elementos aninhados. O método flat() é aplicado ao array       "arr", que retorna um novo array com todos os elementos dos arrays aninhados concatenados em um único   array
*/

const arr = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];

const flattenedArr = arr.flat();

console.log(flattenedArr); // Output: [1, 2, 3, 4, [5, 6]]

/*
  Se quisermos achatar o array completamente, sem nenhum nível de aninhamento, podemos passar o           argumento "depth (profundidade)" como (2).

  No exemplo abaixo, o método flat(2) é aplicado ao array "arr2", que achatou todos os elementos         aninhados até um nível de profundidade máximo de 2.
*/

const arr2 = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];

const flattenedArr2 = arr.flat(2);

console.log(flattenedArr2); // Output: [1, 2, 3, 4, 5, 6]


/*
  O método flat() também pode ser utilizado para remover elementos vazios (undefined, null, ou arrays     vazios []) do array original:

  No exemplo abaixo, o array "arr3" contém elementos vazios (undefined, null e arrays vazios []). O       método flat() é aplicado ao array "arr", que retorna um novo array sem esses elementos vazios.
*/

const arr3 = [ 1, 2, , 3, , , [ 4, 5 ], null ];

const flattenedArr3 = arr.flat();

console.log(flattenedArr3); // Output: [1, 2, 3, 4, 5, null]
