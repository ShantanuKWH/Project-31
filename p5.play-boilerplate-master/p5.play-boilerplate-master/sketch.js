const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var divisionHeight = 300

var particles = []
var plinkos = []
var divisions = []

function setup() {
  createCanvas(480,800);
  fill("black")
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(240,790,500,20)
  for (var k = 0; k <= width; k = k+80) {
    divisions.push(new divider(k, height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new plinko(j,75))
  }
}

function draw() {
  background("gray");  
  for(k = 0; k < divisions.length; k++){
    divisions[k].display()
  }
  for(y = 0; y < particles.length; y++){
    particles[y].display()
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new plinko(j,75))
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,175))
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new plinko(j,275))
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,375))
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new plinko(j,475))
  }
  for(p=0; p < plinkos.length; p++){
    plinkos[p].display()
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10))
  }
  drawSprites();
ground.display()
}