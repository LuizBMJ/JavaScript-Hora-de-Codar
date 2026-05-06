// Exercício 45 - ClearTimeout e ClearInterval

// clearTimeout - cancela um setTimeout antes de ser executado
var timeout = setTimeout(function() {
    console.log("Isso não vai ser executado!");
}, 3000);

console.log("Timeout criado, agora vou cancelar...");
clearTimeout(timeout);
console.log("Timeout cancelado!");

// clearInterval - cancela um setInterval
var contador = 0;

var intervalo = setInterval(function() {
    contador++;
    console.log("Contador: " + contador);

    if (contador >= 3) {
        clearInterval(intervalo);
        console.log("Intervalo cancelado com clearInterval!");
    }
}, 1000);
