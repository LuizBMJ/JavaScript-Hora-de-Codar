// Exercício 47 - Eventos Click

var botao = document.getElementById("meuBotao");

botao.onclick = function() {
    console.log("Botão clicado!");
    alert("Você clicou no botão!");
};

var contador = 0;
var paragrafo = document.getElementById("contador");

paragrafo.onclick = function() {
    contador++;
    this.textContent = "Cliques: " + contador;
};
