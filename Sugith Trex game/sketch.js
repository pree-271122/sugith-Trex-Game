var trex,trexAnimation;
var edge;

function preload(){
  trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,250);
  
  //trex sprite
  trex = createSprite(50,220,10,100);
  trex.addAnimation ("run" , trexAnimation);
  trex.scale=0.6;
  
  //edges
  edge=createEdgeSprites();
  
}

function draw(){
  background("lightgray");

  //trex jump
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  //trex gravity
  trex.velocityY=trex.velocityY+0.5;
  
  //trex collide 
  trex.collide(edge[3]);
  
  drawSprites();
}
