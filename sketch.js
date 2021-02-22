var fixedRec, movingRec;
function setup() {
  createCanvas(1200, 800);
  fixedRec = createSprite(400, 200, 50, 50);
  movingRec = createSprite(500, 300, 50, 50);
  fixedRec.shapeColor = "blue"
  movingRec.debug = true
  fixedRec.debug = true
  movingRec.shapeColor = "yellow"

}

function draw() {
  background(255, 255, 255);
  movingRec.x = World.mouseX
  movingRec.y = World.mouseY
  if (movingRec.x - fixedRec.x < fixedRec.width / 2 + movingRec.width / 2 && fixedRec.x - movingRec.x < fixedRec.width / 2 + movingRec.width / 2 && movingRec.y - fixedRec.y < fixedRec.height / 2 + movingRec.height / 2 && fixedRec.y - movingRec.y < fixedRec.height / 2 + movingRec.height / 2 ) {
    movingRec.shapeColor = "red"
    fixedRec.shapeColor = "red"
  }
  else {
    movingRec.shapeColor = "yellow"
    fixedRec.shapeColor = "blue"
  }

  drawSprites();
}