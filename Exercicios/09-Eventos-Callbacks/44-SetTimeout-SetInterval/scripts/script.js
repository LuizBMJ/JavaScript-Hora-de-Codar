// Exercício 44 - SetTimeout e SetInterval

// setTimeout - executa uma função uma vez após um tempo determinado
setTimeout(function() {
    console.log("Executando após 2 segundos!");
}, 2000);

// setInterval - executa uma função repetidamente a cada intervalo de tempo
var contador = 0;

var intervalo = setInterval(function() {
    contador++;
    console.log("Contador: " + contador);

    if (contador >= 5) {
        clearInterval(intervalo);
        console.log("Intervalo finalizado!");
    }
}, 1000);
