
// setTimeout: Executa uma função após um determinado tempo (em milissegundos)

function saudacao() {
    console.log('Olá, mundo!');
}

setTimeout(saudacao, 500);

// setInterval: Executa uma função repetidamente em um intervalo de tempo especificado (em milissegundos)

var contador = 0;

function incrementarContador() {
    contador++;
    console.log('Contador: ' + contador);
}

// Executa a função incrementarContador a cada 1 segundo (1000 milissegundos)
var intervalo = setInterval(incrementarContador, 1000);
