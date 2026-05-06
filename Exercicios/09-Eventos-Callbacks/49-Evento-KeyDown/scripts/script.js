// Exercício 49 - Evento KeyDown

document.onkeydown = function(event) {
    console.log("Tecla pressionada: " + event.key);
    console.log("Código da tecla: " + event.keyCode);
};

document.onkeypress = function(event) {
    console.log("Tecla (keypress): " + event.key);
};

document.onkeyup = function(event) {
    console.log("Tecla solta: " + event.key);
};
