
// keydown

document.addEventListener('keydown', function(event) {
    var title = document.getElementById('title');
    title.textContent = 'Tecla pressionada: ' + event.key;

    if(event.key === 'Enter') {
        title.style.color = 'green';
    } else {
        title.style.color = 'black';
    }

    // criar uma lista com as ultimas 5 teclas pressionadas e mostrar no h2
    var keyList = document.getElementById('key-list');
    var li = document.createElement('li');
    li.textContent = event.key;
    keyList.appendChild(li);

    if(keyList.children.length > 5) {
        keyList.removeChild(keyList.firstChild);
    }

});