// Exercício 23 - Scope
var x = 1; // Variável global

function teste() {

    var z = 0; // Variável local, só existe dentro da função teste
    console.log(x);
    console.log(z);
}

if(true) {
    var y = 2; // Variável global, mesmo estando dentro do bloco if
    console.log(x);
    console.log(y);
}