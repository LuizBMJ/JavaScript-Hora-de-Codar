// Exercício 37 - RemoveChild

var container = document.getElementById('container');

container.removeChild(container.children[0]); // Remove o primeiro parágrafo dentro do container

var lista = document.getElementById('lista');
lista.remove(); // Remove a lista inteira do DOM