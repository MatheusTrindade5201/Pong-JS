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
var velocidadeJogo = 0.5; /*Quanto maior o valor, mais lento o jogo*/
var margemDeErro = [0.8, 1.2];
var erro = 0.8;


/*Variaveis dda Raquete P1*/
var xRaqueteP1 = 2;
var alturaRaquete = 70;
var yRaqueteP1 = (tela.height - alturaRaquete) / 2; /*formular para centralizar a raquete*/
var larguraRaquete = 10;
var velocidadeRaqueteP1 = 15;

/*Variaveis da Raquete P2*/
var xRaqueteP2 = 588;
var alturaRaquete = 70;
var yRaqueteP2 = (tela.height - alturaRaquete) / 2; /*formular para centralizar a raquete*/
var larguraRaquete = 10;

/*Variaveis das teclas de comando*/
var cimaP1 = '38';
var baixoP1 = '40';

/*Variaveis do placar*/
var placarP1 = 0;
var placarP2 = 0;

/*Declaração das Funções*/

function jogo(){

    pintaCanvas();
    moveBolinha();
    desenhaRaqueteP1();
    desenhaRaqueteP2();
    colisaoBolinhaBordas();
    colisaoRaquetes();
    movimentoRaqueteP2();
    mudaMargemdeErro();
    mostraPlacar();
    marcaPonto();
    console.log(erro);

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

    if(xBolinha - raio < xRaqueteP1 + larguraRaquete 
        && yBolinha > yRaqueteP1
        && yBolinha < yRaqueteP1 + alturaRaquete){
            
            movimentoBolinhaX = movimentoBolinhaX * -1;
            
        }

    if(xBolinha + raio == xRaqueteP2
        && yBolinha > yRaqueteP2
        && yBolinha < yRaqueteP2 + alturaRaquete){
            xBolinha -= 5;
            movimentoBolinhaX = movimentoBolinhaX * -1;
            
        }

}

function movimentoRaqueteP1(evento){

    var tecla = evento.keyCode;

    if(tecla == cimaP1 && yRaqueteP1 > 0){
        yRaqueteP1 -= velocidadeRaqueteP1;
    }
    if(tecla == baixoP1 && yRaqueteP1 + alturaRaquete < 400){
        yRaqueteP1 += velocidadeRaqueteP1 ;
    }
   
}

function movimentoRaqueteP2(){

    var velocidadeRaqueteOponente = (yBolinha - alturaRaquete/2)
    yRaqueteP2 = velocidadeRaqueteOponente *  erro;

}

function mudaMargemdeErro(){

    if(placarP1 > placarP2 && erro > 0.8){
        erro = erro - 0.01;
        if(erro == 0.8){
            erro = 0.8;
        }
    }

    if(placarP2 > placarP1 && erro < 1.2){
        erro += 0.01;
        
    }
}

function mostraPlacar(){

    pintar.fillStyle = 'white';
    pintar.font = "30px serif";
    pintar.fillText(placarP1 + ' - ' + placarP2, 270, 30, 50)

}

function marcaPonto(){

    if(xBolinha - raio == 0){
        placarP2++;
    }

    if(xBolinha + raio == tela.width){
        placarP1++;
    }

}





 /*Chamada das Funções*/
 
 setInterval(jogo, velocidadeJogo);


 document.onkeydown = movimentoRaqueteP1;





