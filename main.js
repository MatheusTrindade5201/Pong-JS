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
var velocidadeJogo = 10; /*Quanto maior o valor, mais lento o jogo*/

/*Variaveis dda Raquete P1*/
var xRaqueteP1 = 5;
var alturaRaquete = 70;
var yRaqueteP1 = (tela.height - alturaRaquete) / 2; /*formular para centralizar a raquete*/
var larguraRaquete = 10;

/*Variaveis dda Raquete P2*/
var xRaqueteP2 = 585;
var alturaRaquete = 70;
var yRaqueteP2 = (tela.height - alturaRaquete) / 2; /*formular para centralizar a raquete*/
var larguraRaquete = 10;

/*Declaração das Funções*/

function jogo(){

    pintaCanvas();
    moveBolinha();
    desenhaRaqueteP1();
    desenhaRaqueteP2();
    colisaoBolinhaBordas();
    colisaoRaquetes();

}

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

function moveBolinha(){

    desenhaBolinha(xBolinha, yBolinha, raio);
    xBolinha += movimentoBolinhaX;
    yBolinha += movimentoBolinhaY;
            
}

function colisaoBolinhaBordas(){

    if(xBolinha + raio == tela.width
        || xBolinha - raio == 0){
        movimentoBolinhaX = movimentoBolinhaX * -1;
    }
    if(yBolinha + raio == tela.height
        || yBolinha - raio == 0){
        movimentoBolinhaY = movimentoBolinhaY * -1;
    }

}

function desenhaRaqueteP1 (){

    pintar.fillStyle = 'white';
    pintar.fillRect(xRaqueteP1, yRaqueteP1, larguraRaquete, alturaRaquete);
    
}

function desenhaRaqueteP2 (){

    pintar.fillStyle = 'white';
    pintar.fillRect(xRaqueteP2, yRaqueteP2, larguraRaquete, alturaRaquete);
    
}

function colisaoRaquetes(){

    if(xBolinha - raio == xRaqueteP1 + larguraRaquete 
        && yBolinha > yRaqueteP1
        && yBolinha < yRaqueteP1 + alturaRaquete){
            movimentoBolinhaX = movimentoBolinhaX * -1;
            movimentoBolinhaY = movimentoBolinhaY * -1;
        }

    if(xBolinha + raio == xRaqueteP2
        && yBolinha > yRaqueteP2
        && yBolinha < yRaqueteP2 + alturaRaquete){
            movimentoBolinhaX = movimentoBolinhaX * -1;
            movimentoBolinhaY = movimentoBolinhaY * -1;
        }

}




 /*Chamada das Funções*/
 
 setInterval(jogo, velocidadeJogo);





