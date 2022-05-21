 /*Declaração das variaveis*/

var tela = document.querySelector('canvas');
var pintar = tela.getContext('2d');

var xBolinha = 300;
var yBolinha = 200;
var raio = 8;
var velocidadeBolinha = 10;
var movimentoBolinhaX = 1;
var movimentoBolinhaY = 1;

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
    colisaoBolinha();
    xBolinha += movimentoBolinhaX;
    yBolinha += movimentoBolinhaY;
    
        
}

function colisaoBolinha(){

    if(xBolinha + raio == tela.width
        || xBolinha - raio == 0){
        movimentoBolinhaX = movimentoBolinhaX * -1;
    }
    if(yBolinha + raio == tela.height
        || yBolinha - raio == 0){
        movimentoBolinhaY = movimentoBolinhaY * -1;
        }

}

 /*Chamada das Funções*/

 setInterval(moveBolinha, velocidadeBolinha);




