// Exercício 25 - Métodos Numéricos
// parseFloat 10.0

console.log(parseFloat("12.999")); // 12.999
console.log(Number.parseFloat("12.999")); // 12.999

// parseInt 10
console.log(parseInt("10.1515")); // 10
console.log(Number.parseInt("10.1515")); // 10


// toFixed | Ele retorna uma string, arredondando o número para o número de casas decimais especificado.

console.log(10.519129999.toFixed(5)); // "10.51913"

// IsNaN | Ele verifica se o valor é NaN (Not a Number) ou não. Retorna true se o valor for NaN, caso contrário, retorna false.

console.log(isNaN("Olá")); // true
console.log(isNaN(123)); // false
console.log(isNaN("13")); // false, porque "13" pode ser convertido para o número 13, que é um valor numérico válido.


// MAX_VALUE e MIN_VALUE | Eles representam o maior e o menor valor numérico que pode ser representado em JavaScript, respectivamente.

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.91823812301823918230e+308);