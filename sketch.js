const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var engine, world;
var ground;
var Division;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(600,height,1200,20);

  for(var k = 0; k<= width; k = k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 0;  j<= width; j = j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new plinko(j,175));

  }
  if(frameCount%60===0)
  {
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }

  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  

  if(frameCount%60===0)
  {
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  

  for(var m = 0; m< particles.length; m++){
    particles[m].display();
  }   
  for(var n =0; n<divisions.length; n++){
    divisions[n].display();
  }
  for (var k = 0 ; k < plinkos.length; k++){
    plinkos[k].display();
  } 
  
 
   
  
  drawSprites();
  }