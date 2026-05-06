// Exemplo de clearTimeout

var x = 0;

var myTimer = setTimeout(function() {
    console.log('Executado após 2 segundos');
}, 2000);

x = 5;

// cancelar o timeout antes de ser executado

if(x > 0) {
    clearTimeout(myTimer);
    console.log('Timeout cancelado');
}

// Exemplo de clearInterval

var myInterval = setInterval(function() {
    console.log('Executado a cada 1 segundo');
}, 1000);

setTimeout(function() {
    clearInterval(myInterval);
    console.log('Intervalo cancelado');
}, 5000);