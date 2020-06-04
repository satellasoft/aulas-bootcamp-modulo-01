'use strict'

var idade = prompt('Qual a sua idade?');

if (idade >= 18) {
    let resposta = confirm('Você deseja comprar o ingresso?');
    
    if (resposta)
        alert('Okay, entrou');
    else
        alert('Okay, você saiu :\'(');
    
} else {
    alert('Você não pode entrar');
}

/*
var obj = {
    nome: 'Gunnar',
    idade: 27,
    trabalha: 'não'
};

//console.log(obj);
console.table(obj);



const idade = 25;
var nome = 'Gunnar';

//alert(idade);


if (1 + 1 == 2) {
    let nome = 'Angélica';
    alert(nome);
}
*/