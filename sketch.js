var ball;
var database,position
var gameState=0;
var playerCount;
 var allPlayers;
 var distance=0;
 var cars,car1,car2,car3,car4;
var form,player,game;
var car1img,car2img,car3img,car4img;
var track;
var obstacle;
var pez4;
var obstacle1;
var obstacle3;
var obstacle2;
var gameEnd

function preload(){
car1img=loadImage("barco1.png");
car2img=loadImage("barco2.png");
car3img=loadImage("barco3.png");
car4img=loadImage("barco4.png");
track=loadImage("Imagen2.jpg");
pez=loadImage("pez3.png");
pez4=loadImage("pez4.png");

}
function setup(){
    database=firebase.database();

    createCanvas(displayWidth-20,displayHeight-30);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
    if(playerCount === 4){
         game.update(1);
     } 
     if(gameState === 1){
          clear();
         game.play(); 
        if(gameState === 2){
            game.end();
        }

        }

 //aquivamos
}

  
  
  