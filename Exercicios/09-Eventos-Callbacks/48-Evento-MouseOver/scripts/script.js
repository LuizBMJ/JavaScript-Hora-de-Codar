// Exercício 48 - Evento MouseOver

var box = document.getElementById("box");

box.onmouseover = function() {
    this.style.backgroundColor = "lightblue";
    this.textContent = "Mouse está em cima!";
};

box.onmouseout = function() {
    this.style.backgroundColor = "lightgray";
    this.textContent = "Mouse saiu!";
};
