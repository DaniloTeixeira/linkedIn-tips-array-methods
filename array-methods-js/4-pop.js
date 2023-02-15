/* A função pop é utilizada para remover o último item de um array. Ela retorna o item removido, e ao mesmo tempo, o array fica com um elemento a menos. 

Confira abaixo um exemplo de como usar a função pop: */

const fruits = [ "banana", "apple", "grapes" ];
const removedFuit = fruits.pop();

console.log(fruits); // Output: ["banana", "apple"]
console.log(removedFuit); // Output: "grapes"

/* Neste exemplo, o array frutas inicialmente possui três elementos: "banana", "apple" e "grapes". Quando a função pop é chamada, o último elemento do array, "grapes", é removido e atribuído à variável frutaRemovida. O array frutas agora tem duas entradas: "banana" e "apple". */