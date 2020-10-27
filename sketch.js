const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight=300;
var divisions =[]; 
var plinko =[]; 
var particle=[];


function setup() {
  var canvas = createCanvas(500,730);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/3,720,700,20);
  line = new Line(494,364,10,730);
  line1 = new Line(242,725,495,8);
  line2 = new Line(5,364,8,730);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for(var x =50; x<width; x= x + 50){
 plinko.push(new Plinko(x, 75))
}
for(var x =75; x<width-10; x= x + 50){
  plinko.push(new Plinko(x, 175))
}
for(var x =50; x<width; x= x + 50){
  plinko.push(new Plinko(x, 275))
}
}
function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  ground.display();
  line.display();
  line1.display();
  line2.display();


  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var y=0;y<particle.length; y++){
    particle[y].display();
  }
  for (var k=0;k<divisions.length; k++){
    divisions[k].display();
  }
  for (var x=0;x<plinko.length; x++){
    plinko[x].display();
  }
 
  drawSprites();
}