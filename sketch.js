
var sun, p1, p2, p3, p4;
var sunI, p1I, p2I, p3I, p4I;
var reset,resetI;
var sunRad = 40;
function preload(){
  sunI = loadImage('sun.png');
  p1I = loadImage('p1.png');
  p2I = loadImage('p2.png');
  p3I = loadImage('p3.png');
  p4I = loadImage('p4.png');
  resetI = loadImage('New Bitmap Image.png');
}

function setup(){
  createCanvas(800,800);
  sun = createSprite(400,400,80,80);
  sun.setCollider("circle",0,0,sun.width/2);

  p1 = createSprite(300,400,40,40);
  p1.setCollider("circle",0,0,p1.width/2);
  p1.addImage(p1I);
  p1.scale = 0.04;
  p2 = createSprite(320,273.2,30,30);
  p2.setCollider("circle",0,0,p2.width/2);
  p2.addImage(p2I);
  p2.scale = 0.1;
  p3 = createSprite(400,200,50,50);
  p3.setCollider("circle",0,0,p3.width/2);
  p3.addImage(p3I);
  p3.scale = 0.02;
  p4 = createSprite(580,226.5,35,35);
  p4.setCollider("circle",0,0,p4.width/2);
  p4.addImage(p4I);
  p4.scale = 0.1;
  reset = createSprite(100,100,100,50);
  reset.addImage(resetI);
  reset.scale= 0.5;
}


function draw(){
  background("blue");
  sun.setCollider("circle",0,0,sun.width/2);
  if(sun.isTouching(p1)){
    p1.destroy;
  }
  if(sun.isTouching(p2)){
    p2.destroy;
  }
  if(sun.isTouching(p3)){
    p3.destroy;
  }
  if(sun.isTouching(p4)){
    p4.destroy;
  }
sun.width = 5;sun.height =5;
  if(frameCount%2===0){
    sunRad = sunRad + 1;
  }
  if(mousePressedOver(reset)){
    sunRad = 40;
  }
  noFill();
  ellipse(400,400,200);
  ellipse(400,400,300);
  ellipse(400,400,400);
  ellipse(400,400,500);
  drawSprites();
  fill("yellow");
  ellipse(sun.x,sun.y,sunRad/2,sunRad/2);
  reset.x = 100;reset.y = 100;

}