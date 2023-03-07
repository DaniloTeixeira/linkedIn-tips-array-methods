/*
  O método values() é usado para retornar um objeto iterador com os valores dos elementos de um array em ordem de inserção. Ele pode ser utilizado para iterar sobre os valores de um array sem a necessidade de acessá-los pelo seu índice.
*/

const arr = [ 'a', 'b', 'c' ];
const values = arr.values();

console.log(values.next().value); // 'a'
console.log(values.next().value); // 'b'
console.log(values.next().value); // 'c'

/*
  Neste exemplo, é criado um array com os valores 'a', 'b' e 'c'. Em seguida, o método values() é usado para criar um iterador com os valores desse array. Depois, os valores são acessados usando o método next() do iterador, e o valor retornado por cada chamada do método é impresso no console.
*/

/*
  O método next() é um método utilizado em iteradores, como o objeto retornado pelo método values() de um objeto iterável em JavaScript. Ele é utilizado para acessar o próximo valor na iteração e retornar um objeto com duas propriedades: done e value.

  A propriedade done é um valor booleano que indica se a iteração foi concluída ou não. Se não houverem mais valores na iteração, done será true, caso contrário, será false. Já a propriedade value é o valor do próximo elemento na iteração.

  No exemplo dado acima, o método next() é utilizado para acessar cada valor do iterador retornado pelo método values() do objeto frutas, um a um, e imprimi-los no conso
*/