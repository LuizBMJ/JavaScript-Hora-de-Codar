// Exercício 29 - Métodos Array 02
// splice
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b', 'c'); // a partir do índice 2, remove 0 elementos e adiciona 'a', 'b' e 'c'
console.log(arr);

arr.splice(2, 2); // a partir do índice 2, remove 2 elementos
console.log(arr);

// indesOf

console.log(arr.indexOf(4)); // retorna o índice do elemento 4
console.log(arr.indexOf(10)); // retorna -1, pois o elemento 10 não existe no array

// join
var arr2 = ['Jorge', 'Marya', 'João'];
console.log(arr2.join(', ')); // junta os elementos do array em uma string, separados por ', '

// reverse
console.log(arr.reverse()); // inverte a ordem dos elementos do array