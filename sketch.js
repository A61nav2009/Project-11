
var trex ,trex_running,ground;
function preload(){
trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(900,800)
  
  //create a trex sprite
trex = createSprite(50,750,50,50) 
trex.addAnimation("running",trex_running)
ground = createSprite(450,780,900,20)
}

function draw(){
  background("black")

  if (keyDown("space")){
    trex.velocityY = -12
  }
  trex.velocityY = trex.velocityY+1

  trex.collide(ground)
  
drawSprites()
}
