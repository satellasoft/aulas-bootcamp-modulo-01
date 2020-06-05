'use strict'
clicado();

function clicado() {
    //getById
    let nome = document.getElementById('txtNome');
    // console.log(nome.value);

    //getByClass
    let classes = document.getElementsByClassName('lista');

    for (var i = 0; i < classes.length; i++) {
        //console.log(classes[i]);
        //classes[i].innerHTML += ' **********';

        //let value = classes[i].innerHTML;
        //classes[i].innerHTML = value + ' **********';
    }

    //GetByTagName
    var a = document.getElementsByTagName('a');

    for (var i = 0; i < a.length; i++) {
        if (!a[i].hasAttribute('target')) {
            if (a[i].getAttribute('href').indexOf('satellasoft') == -1) {
                a[i].setAttribute('target', '_blank');
                a[i].style.backgroundColor = 'red';
            }
        }
    }
}

//document.title = "Olha eu aqui";


//document.location.href = "https://google.com";