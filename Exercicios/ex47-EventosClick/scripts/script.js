
var button = document.querySelector('button');

button.addEventListener('click', function() {
    alert('Botão clicado!');
});

var links = document.querySelectorAll('a');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        alert('Link clicado: ' + link.textContent);
    });
});

var title = document.querySelector('h1');

// title.addEventListener('click', function() {

//     title.style.color = 'red';
//     title.textContent = 'Título clicado!';
// });


// double click

// title.addEventListener('dblclick', function() {

//     title.style.color = 'blue';
//     title.textContent = 'Título duplamente clicado!';
// });

// click infinito
var clickCount = 0;

title.addEventListener('click', function() {
    clickCount++;
    title.textContent = 'Título clicado ' + clickCount + ' vezes!';

    // cor aleatoria

    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    title.style.color = randomColor;
});