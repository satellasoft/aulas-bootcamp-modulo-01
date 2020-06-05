'use strict'

var app = document.getElementById('app');

var ul = document.createElement('ul');

for (let i = 0; i < 15; i++) {
    let li = document.createElement('li');
    li.innerText = 'Número ';

    let span = document.createElement('span');
    let valor = (i + 1);
    
    span.innerText = valor < 10 ? '0' + valor : valor;
    span.style.fontWeight = 'bold';
    span.style.color = 'green';
    //span.setAttribute('style', 'font-weight: bold;');

    li.appendChild(span);

    ul.appendChild(li);
}

app.appendChild(ul);