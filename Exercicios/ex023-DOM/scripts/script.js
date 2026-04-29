var lista = ['Laranja', 'Banana', 'Maçã', 'Uva', 'Abacaxi'];

var ul = document.createElement('ul');

for (var i = 0; i < lista.length; i++) {
    var li = document.createElement('li');
    li.textContent = lista[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);