 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  box1 = new Box(600,480,70,70);
  box2 = new Box(600,400,70,70);
  box3 = new Box(600,320,70,70);
  box4 = new Box(600,240,70,70);
  box5 = new Box(600,160,70,70);
  box6 = new Box(600,80,70,70);
  box7 = new Box(800,400,70,70);
  box8 = new Box(800,320,70,70);
  box9 = new Box(800,240,70,70);
  box10 = new Box(800,160,70,70);
  box11 = new Box(800,80,70,70);
  box12 = new Box(1000,320,70,70);
  box13 = new Box(1000,240,70,70);
  box14 = new Box(1000,160,70,70);
  box15 = new Box(1000,80,70,70);
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
}