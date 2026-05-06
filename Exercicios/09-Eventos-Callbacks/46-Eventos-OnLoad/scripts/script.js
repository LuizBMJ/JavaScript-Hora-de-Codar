// Exercício 46 - Eventos OnLoad

window.onload = function() {
    console.log("A página carregou completamente!");

    var titulo = document.getElementById("titulo");
    titulo.textContent = "Página carregada com sucesso!";
    titulo.style.color = "green";
};
