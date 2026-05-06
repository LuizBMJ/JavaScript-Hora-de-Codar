// Exercício 19 - While 02
var x = 1;
var y = 2;


// Soma
console.log(x = x + y);
console.log(x += y);

// Subtração
console.log(x -= y);

// Multiplicação
console.log(x *= y);

// Divisão
console.log(x /= y);

// Loops
console.log(x++);
console.log(x--);

while(x <= 100) {
    console.log(x);

    x *= 2;
}

console.log(x);

while(x > 0) {

    console.log(x);
    
    x /= 2;
}