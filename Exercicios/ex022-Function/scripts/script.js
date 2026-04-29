function primeiraFuncao() {
    

    console.log("Olá, eu sou uma função!");
}

primeiraFuncao();

function dizerNome(nome) {
    console.log("Olá, meu nome é " + nome);
}

dizerNome("Jorge");

var nomeDoBancoDeDados = "MinhaBaseDeDados";
dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}   

var somaUm = soma(5, 10);
console.log(somaUm);

console.log(soma(20, 30));
