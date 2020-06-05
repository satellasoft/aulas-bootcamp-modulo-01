'use strict'
var maxLength = 150;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('frmCadastro').addEventListener('submit', function () {
        alert('AEEEEEEEE');
    });
});

function contaCaracteres() {
    let text = document.getElementById('txtMensagem');
    //////////////150----------------------10
    let contador = maxLength - text.value.length;

    let caracteres = document.getElementById('caracteres');
    caracteres.innerText = contador;

    if (contador < 0) {
        caracteres.style.color = 'red';
        text.style.border = '3px solid red';
    } else {
        //caracteres.className = 'classeCSS';

        caracteres.style.color = 'green';
        text.style.border = '3px solid green';
    }
}

function enviaForm() {
    return false;
}