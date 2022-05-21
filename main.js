var tela = document.querySelector('canvas');
var pintar = tela.getContext('2d');

function pintaCanvas(){
    pintar.fillStyle = 'black';
    pintar.fillRect(0, 0, 600, 400);
}

pintaCanvas();