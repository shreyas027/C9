var box,box2


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
  box.shapeColor = "blue"
  box2 = createSprite(200,100,40,40)
  box2.shapeColor = "green"

}
 
function draw() 
{
  background(30);
  if (keyDown("right")){
    box.x = box.x + 5
  }
  if (keyDown("left")){
    box.x = box.x - 5
  }
  box2.x = World.mouseX
  box2.y = World.mouseY
  box2.bounceOff(box)

  drawSprites()

}




