// Exercício 40 - Alterando Atributos

// atribuir atributos

var title = document.getElementById('title');

title.setAttribute('class', 'testando-atributo');

var botao = document.getElementById('botao');
botao.setAttribute('disabled', 'disabled');

// remover atributos

title.removeAttribute('class');
botao.removeAttribute('disabled');