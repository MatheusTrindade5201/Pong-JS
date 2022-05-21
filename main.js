 /*Declaração das variaveis*/

var tela = document.querySelector('canvas');
var pintar = tela.getContext('2d');

var xBolinha = 300;
var yBolinha = 200;
var raio = 8;

 /*Declaração das Funções*/

function pintaCanvas(){
    pintar.fillStyle = 'black';
    pintar.fillRect(0, 0, 600, 400);
}

function desenhaBolinha(){

    pintar.fillStyle = 'white';
    pintar.arc(xBolinha, yBolinha, raio, 0, 2 * Math.PI);
    pintar.fill()


}

 /*Chamada das Funções*/

pintaCanvas();
desenhaBolinha();

