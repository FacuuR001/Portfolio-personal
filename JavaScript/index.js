var i = 0;
var txt = ' FACUNDO RULLO';
var speed = 90;


typeWrite();


function typeWrite() {
    if(i < txt.length) {
        document.getElementById('texto').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}


function seleccionar(link) {
    var opciones = document.querySelectorAll('#links, a');
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    opciones[6].className = "";
    link.className = "seleccionado"

    var x = document.getElementById('menu');
    x.className = ""
}









