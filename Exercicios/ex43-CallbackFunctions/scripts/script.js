
function exibir(num) {
    console.log("Número: " + num);
}

function processar(callback) {
    for (let i = 1; i <= 5; i++) {
        callback(i);
    }
}

processar(exibir);


function soma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

function multiplicacao(a, b, callback) {
    const resultado = a * b;
    callback(resultado);
}

soma(2, 2, exibir);
multiplicacao(3, 4, exibir);