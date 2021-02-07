function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 200, 50, 50);

}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if((movingRect.x - fixRect.x <= movingRect.width/2 + fixRect.width/2)&&
  (fixRect.x - movingRect.x <= movingRect.width/2 + fixRect.width/2) &&
  (fixRect.y - movingRect.y <= movingRect.height/2 + fixRect.height/2)&&
  (movingRect.y - fixRect.y <= movingRect.height/2 + fixRect.height/2)){
    fixRect.shapeColor = "green" 
    movingRect.shapeColor = "green" 
  }
  else{
    fixRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
      drawSprites();
}