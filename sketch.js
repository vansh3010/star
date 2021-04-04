var fixedRect, movingRect,gameobject1;

function setup() {
  createCanvas(1200,800);
fixedRect=createSprite(600, 400, 50, 80);
fixedRect.shapeColor="blue"

movingRect=createSprite(300, 200, 80, 30);
movingRect.shapeColor="green"
movingRect.velocityX=-3

gameobject1=createSprite(500,200,50,50)
gameobject1.velocityX=3
}

function draw() {
  background(255,255,255);  
  //movingRect.x=World.mouseX
  //movingRect.y=World.mouseY

  // if(isTouching(movingRect,gameobject1))
  // {
  //   movingRect.shapeColor="red"
  //   gameobject1.shapeColor="red"
     
  // }
  // else
  // {
  //   movingRect.shapeColor="green"
  //   gameobject1.shapeColor="green"


  // }
 
bounceOff(movingRect,gameobject1)


  

  drawSprites();
}
