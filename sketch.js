var sea;
var seaImage ;
var ship;
var shipImg1;

function preload(){
  seaImage = loadImage("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400) 
sea = createSprite (400,200);
sea.addImage ("animationSea",seaImage);
sea.velocityX=-5;
sea.scale=0.3;

ship = createSprite (200,180,10,10);
ship.addAnimation("movieShip",shipImg1);
 ship.scale=0.2; 
}

function draw(){
  
  background("powderblue")
   
  sea.velocityX=-3;

drawSprites();

}