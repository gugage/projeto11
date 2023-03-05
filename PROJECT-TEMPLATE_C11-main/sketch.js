var titanic, titanicImg
var sea, seaImg

function preload(){
titanicImg = loadAnimation("ship-1,ship-2")
seaImg = loadImage("sea.pmg")

}

function setup(){
  createCanvas(400,400);

  titanic = createSprite(50,170,30)
titanic.addAnimation("runnig",titanicImg)

titanic.scale = 0,5

  sea = createSprite(300,190,600,20)
sea.addImage(seaImg)
sea.velocityX = -5;

}

function draw() {
  background("blue");
  

  titanic.collide(sea);
  

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}
  
  

 

