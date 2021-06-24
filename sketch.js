var Runner,path,path_Img
var RunnerImg

function preload(){
  //pre-load image
  path_Img=loadImage("path.png")
  RunnerImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path=createSprite(200,200,50,50);
  path.addImage(path_Img);
  path.velocityY=4;
  path.scale=1.2;
  Runner=createSprite(200,300,25,25)
  Runner.addAnimation("R1",RunnerImg)
 Runner.scale=0.1
}
function draw() {
  background(0);

  //code to reset thebackground
  if (path.y>400){
  path.y=height/2
  }

  drawSprites();
}