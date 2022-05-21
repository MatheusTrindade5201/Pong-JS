 /*Declaração das variaveis*/

/*Variaveis base*/
var tela = document.querySelector('canvas');
var pintar = tela.getContext('2d');

/*Variaveis da Bolinha*/
var xBolinha = 300;
var yBolinha = 200;
var raio = 8;
var movimentoBolinhaX = 1;
var movimentoBolinhaY = 1;

/*Variaveis da Jogabilidade*/
var velocidadeJogo = 10;

/*Variaveis dda Raquete P1*/
var xRaqueteP1 = 10;
var alturaRaquete = 70;
var yRaqueteP1 = (tela.height - alturaRaquete) / 2;
var larguraRaquete = 10;





 /*Declaração das Funções*/

function pintaCanvas(){
    pintar.fillStyle = 'black';
    pintar.fillRect(0, 0, 600, 400);
}

function jogo(){

    moveBolinha();
    desenhaRaquete();

}

function desenhaBolinha(x, y, raio){

    pintar.fillStyle = 'white';
    pintar.beginPath();
    pintar.arc(x, y, raio, 0, 2 * Math.PI);
    pintar.fill()


}

function moveBolinha(){

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

function desenhaRaquete (){

    pintar.fillStyle = 'white';
    pintar.fillRect(xRaqueteP1, yRaqueteP1, larguraRaquete, alturaRaquete);
    
}

 /*Chamada das Funções*/
 
 
 setInterval(jogo, velocidadeJogo);
 desenhaRaquete();




