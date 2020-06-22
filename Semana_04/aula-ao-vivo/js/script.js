'use strict'

document.addEventListener('DOMContentLoaded', function () {

    //Aguarda a página terminar de carregar

    document.getElementById('frmContato').addEventListener('submit', (event) => {

        let data = pegarValores();

        if (!validar(data))
            event.preventDefault();
    });

});

function validar(data) {
    let msg = [];

    if (data.nome[0].length < 7) {
        setClass(data.nome[1], 'errado');

        msg.push('Nome inválido.');
    } else {
        setClass(data.nome[1], 'valido');
    }

    if (data.email[0].length < 5 ||
        data.email[0].indexOf('@') <= 0 ||
        data.email[0].indexOf('.') <= 0) {
        msg.push('E-mail inválido.');
        setClass(data.email[1], 'errado');
    } else {
        setClass(data.email[1], 'valido');
    }

    exibirMensagem(msg);

    return msg.length == 0;
}

function pegarValores() {
    return {
        nome: [getValue('txtNome'), 'txtNome'],
        email: [getValue('txtEmail'), 'txtEmail']
    };
}

function exibirMensagem(msg) {
    let mensagem = document.getElementById('dvMensagem');
    mensagem.innerHTML = '';

    var ul = document.createElement('ul');

    for (let i = 0; i < msg.length; i++) {
        var li = document.createElement('li');
        li.innerText = msg[i];

        ul.appendChild(li);
    }

    mensagem.appendChild(ul);
}

function setClass(id, classe) {
    document.getElementById(id).className = classe;
}

function getValue(id) {
    return document.getElementById(id).value;
}