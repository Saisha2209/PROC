const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Bg
var Snow=[]
function preload(){
  Bg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(Bg);  
  if (frameCount%20===0){
    Snow.push(new snow(random(0,800),0,50))
  }

  drawSprites();
 for (var s=0;s<Snow.length;s++){
Snow[s].display()
 }
}