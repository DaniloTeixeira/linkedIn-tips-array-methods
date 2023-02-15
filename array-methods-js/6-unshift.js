/* O método unshift é um método que permite adicionar um ou mais elementos no início de um array. Ele        retorna o novo comprimento do array. */

const students = [ "João", "Maria", "Pedro" ];
students.unshift("Lucas", "Marlene");

console.log(students); // Output: ["Lucas", "Marlene", "João", "Maria", "Pedro"]