// Exercício 38 - AppendChild e InsertBefore


var el = document.createElement("div");

el.textContent = "Este é um novo elemento criado com JavaScript.";

var body = document.querySelector("body");
body.appendChild(el); // Adiciona o novo elemento ao final do body

var outroEl = document.createElement("p");
outroEl.textContent = "Este parágrafo será inserido antes do elemento criado.";

body.insertBefore(outroEl, el); // Insere o parágrafo antes do elemento criado