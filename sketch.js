var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  

  o1 =createSprite(200,400,50,50)
  o2 = createSprite(400,400,50,50)
  o3 = createSprite(600,400,50,50)
  o4 = createSprite(800,400,50,50)
  
  o1.shapeColor = "green"
  o2.shapeColor = "green"
  o3.shapeColor = "green"
  o4.shapeColor = "green"

  o1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (istouching (movingRect,o1)){
    movingRect.shapeColor = "red"
    o1.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    o1.shapeColor = "green"
  }

  bounceOff(movingRect,o1);

 
  drawSprites();
}

function istouching(object1,object2){
if(object1.x-object2.x < object2.width/2 + object1.width/2
  && object2.x-object1.x<object2.width/2 + object1.width/2
  && object1.y-object2.y<object2.height/2 + object1.height/2 
  && object2.y-object1.y<object2.height/2 + object1.height/2)
  {
    return true; 
  }
  else{
    return false;
  }
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object1.height/2 + object2.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}