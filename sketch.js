var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1000,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(10,20);
  weight=random(400,1600);
  wall=createSprite(970,200,60,250);
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
  textSize(30);
}

function draw() {
  background("blue");
  car.display();
  wall.display();
  if(wall.isTouching(car)){
    car.velocityX=0;
    text("Deformation:"+deformation,350,100);
  }
  

  drawSprites();

}
