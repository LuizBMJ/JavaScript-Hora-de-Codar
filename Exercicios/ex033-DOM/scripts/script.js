
// tag
var titulo = document.querySelector("h1");
console.log(titulo.textContent); // Titulo principal

// id
var paragrafo = document.getElementById("paragrafo");
console.log(paragrafo.textContent); // Parágrafo de exemplo

// class
var itens = document.getElementsByClassName("item");
for (var i = 0; i < itens.length; i++) {
    console.log(itens[i].textContent); // Item 1, Item 2, Item 3
}

// querySelectorAll
var itensQuery = document.querySelectorAll(".item");
itensQuery.forEach(function(item) {
    console.log(item.textContent); // Item 1, Item 2, Item 3
});

