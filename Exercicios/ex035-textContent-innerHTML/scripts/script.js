// selecionar elementos

var title = document.getElementById("title");

// innerHTML

console.log(title.innerHTML); // Titulo principal

title.innerHTML = "Novo título";
console.log(title.innerHTML); // Novo título

// textContent -> mais utilizado para acessar o texto puro, sem tags HTML

console.log(title.textContent); // Novo título

title.textContent = "Título atualizado";
console.log(title.textContent); // Título atualizado