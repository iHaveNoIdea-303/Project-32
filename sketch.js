const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var Plinkos=[]
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
for(var i=50;i<=width;i=i+50){
  Plinkos.push(new Plinko(i,50))
  console.log(Plinkos)
}


  floor=new Ground(240,780,480,50)
  peg1=new Plinko (200,200)
}

function draw() {
  background(0);  
  //drawSprites();
  Engine.update(engine);

  floor.Appear()
  peg1.Display()
  Plinkos[0].Display()
for(var i=0;i<Plinkos.length;i++){
  Plinkos[i].Display()
  //console.log(Plinkos)
}
}