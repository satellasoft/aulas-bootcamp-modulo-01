'use strict'

var game = {
    cor: 'Preto',
    tamanho: '8cmx8cmX2.5xm',
    modelo: 'SP',
    estado: 'Funcionando',
    jogos: [
        {
            nome: 'Harvest Moon',
            preco: '100R$',
            descricao: 'Plante e cuide dos bixos',
            modelo: 'SP'
        },
        {
            nome: 'Pokemon TGC',
            preco: '250R$',
            descricao: 'Duele com seus Pokemons',
            modelo: 'Game Boy Color'
        },
    ]
};

var json = '{"cor":"Preto","tamanho":"8cmx8cmX2.5xm","modelo":"SP","estado":"Funcionando","jogos":[{"nome":"Harvest Moon","preco":"100R$","descricao":"Plante e cuide dos bixos","modelo":"SP"},{"nome":"Pokemon TGC","preco":"250R$","descricao":"Duele com seus Pokemons","modelo":"Game Boy Color"}]}';
console.log(typeof json);

json = JSON.parse(json);
console.log(typeof json);
console.log(json.tamanho);

setHTML('spCor', game.cor);
setHTML('spTamanho', game.tamanho);
setHTML('spModelo', game.modelo);
setHTML('spEstado', game.estado);

createTable(game.jogos);
//console.log(Array.isArray(game.modelo));

function createTable(obj) {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    console.log(obj);

    for (let i = 0; i < obj.length; i++) {
        let data = obj[i];

        tbody.innerHTML += '<tr>' +
            '<td>' + data.nome + '</td>' +
            '<td>' + data.preco + '</td>' +
            '<td>' + data.descricao + '</td>' +
            '<td>' + data.modelo + '</td>' +
            '</tr>';
    }
}

function setHTML(el, value) {
    document.getElementById(el).innerHTML = value;
}