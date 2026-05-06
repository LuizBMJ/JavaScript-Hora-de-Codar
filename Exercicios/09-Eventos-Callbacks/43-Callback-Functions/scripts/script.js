// Exercício 43 - Callback Functions

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

function falarCom(callback, nome) {
    callback(nome);
}

falarCom(saudacao, "Jorge");

function soma(a, b, callback) {
    var resultado = a + b;
    callback(resultado);
}

function exibirResultado(resultado) {
    console.log("O resultado é: " + resultado);
}

soma(5, 3, exibirResultado);

soma(10, 20, function(resultado) {
    console.log("Resultado da soma: " + resultado);
});
