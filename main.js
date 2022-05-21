 /*Declaração das variaveis*/

var tela = document.querySelector('canvas');
var pintar = tela.getContext('2d');

var xBolinha = 300;
var yBolinha = 200;
var raio = 8;
var velocidadeBolinha = 10;
var movimentoBolinha = 1;

 /*Declaração das Funções*/

function pintaCanvas(){
    pintar.fillStyle = 'black';
    pintar.fillRect(0, 0, 600, 400);
}

function desenhaBolinha(x, y, raio){

    pintar.fillStyle = 'white';
    pintar.beginPath();
    pintar.arc(x, y, raio, 0, 2 * Math.PI);
    pintar.fill()


}

function limpaTela(){

    pintar.clearRect(0, 0, 600, 400);

}

function moveBolinha(){

    limpaTela();
    pintaCanvas();
    desenhaBolinha(xBolinha, yBolinha, raio);
    xBolinha += movimentoBolinha;
    yBolinha += movimentoBolinha;
    
}

 /*Chamada das Funções*/

 setInterval(moveBolinha, velocidadeBolinha);




