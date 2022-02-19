
var trex ,trex_running, ground ;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,5,5)
 // sprite.addAnimation("label",loadedAnimation)
 trex.addAnimation("running",trex_running)
 trex.scale = 0.5
 ground = createSprite(300,175,600,5)
}

function draw(){
  background("black")
  
  if (keyDown("space")){
  trex.velocityY = -10 
  }

// score= score +5 
trex.velocityY = trex.velocityY + 0.8  
trex.collide(ground) 

drawSprites()
}
