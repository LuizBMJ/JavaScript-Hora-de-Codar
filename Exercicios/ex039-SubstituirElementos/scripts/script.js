// criar um elemento

var el = document.createElement('h1');

el.classList = 'testando-classe';

var texto = document.createTextNode('Olá, mundo!');

el.appendChild(texto);

// selecionar o elemento a ser substituído

var title = document.getElementById('title');

// selecionar o elemento pai do elemento a ser substituído

var pai = title.parentNode;

// substituir o elemento

pai.replaceChild(el, title);