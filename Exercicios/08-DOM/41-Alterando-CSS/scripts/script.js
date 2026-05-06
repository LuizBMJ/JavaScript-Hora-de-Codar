// Exercício 41 - Alterando CSS

var title = document.getElementById('title');

title.style.color = 'red';

// background-color

title.style.backgroundColor = 'yellow';

// font-size

title.style.fontSize = '50px';

// selecionar elemento
var container = document.getElementById('container');

// adicionar varios estilos
container.style.cssText = 'background-color: lightblue; padding: 20px; border-radius: 10px;';
