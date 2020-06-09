'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('frmCadastro').addEventListener('submit', (event) => {
        var obj = getAttributes();

        if (!validar(obj))
            event.preventDefault();
    });
});

function getAttributes() {
    return {
        nome: [getValue('txtNome'), 'txtNome'],
        email: [getValue('txtEmail'), 'txtEmail'],
        senha: [getValue('txtSenha'), 'txtSenha'],
        senha2: [getValue('txtSenhaConfirma'), 'txtSenhaConfirma'],
        genero: [getValue('slGenero'), 'slGenero'],
        dataNascimento: [getValue('txtDataNascimento'), 'txtDataNascimento'],
        sobre: [getValue('txtSobre'), 'txtSobre']
    };
}

function validar(obj) {
    let erros = [];
    //console.log(typeof erros);

    if (obj.nome[0].length < 3 || obj.nome[0].length > 50) {
        erros.push('Informe um nome válido. Min. 3 e max. 50 caracteres')
        setBorderColor(obj.nome[1], 'form invalid');
    } else {
        setBorderColor(obj.nome[1], 'form valid');
    }

    if ((obj.email[0].length < 5 || obj.email[0].length > 100) || !/.+?\@.+?\..+/.test(obj.email[0])) {
        erros.push('Informe um Email válido')
        setBorderColor(obj.email[1], 'form invalid');
    } else {
        setBorderColor(obj.email[1], 'form valid');
    }

    if ((obj.senha[0].length < 7 || obj.senha[0].length > 100) || obj.senha[0] != obj.senha2[0]) {
        erros.push('Informe um senha válida. Min. 7 e max. 100 caracteres')
        setBorderColor(obj.senha[1], 'form invalid');
        setBorderColor(obj.senha2[1], 'form invalid');
    } else {
        setBorderColor(obj.senha[1], 'form valid');
        setBorderColor(obj.senha2[1], 'form valid');
    }

    if (obj.genero[0] == 'F' || obj.genero[0] == 'M') {
        setBorderColor(obj.genero[1], 'form valid');
    } else {
        erros.push('Gênero inválido')
        setBorderColor(obj.genero[1], 'form invalid');
    }

    let date = obj.dataNascimento[0].split('-');
    var currentYear = new Date().getFullYear();

    if ((date[0] < 1940 || date[0] > currentYear) ||
        (date[1] <= 0 | date[1] > 12) ||
        (date[2] <= 0 || date[2] > 31)) {
        erros.push('Informe uma data válida')
        setBorderColor(obj.dataNascimento[1], 'form invalid');
    } else {
        setBorderColor(obj.dataNascimento[1], 'form valid');
    }

    if (erros.length > 0) {
        createListError(erros);
        return false;
    }

    return true;
}

function createListError(data) {
    var app = document.getElementById('mensagens');
    app.innerHTML = '';

    var ul = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<div class="alert-warning">' + data[i] + '</div>';

        ul.appendChild(li);
    }

    app.appendChild(ul);
}

function getValue(el) {
    return document.getElementById(el).value;
}

function setBorderColor(el, cor) {
    document.getElementById(el).className = cor;
}