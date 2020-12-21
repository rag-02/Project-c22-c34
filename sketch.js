 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Mouse = Matter.Mouse;
 const Constraint = Matter.Constraint;
 const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var ground;
var box1;
var pendulum1;
var sling1;
var mConstraint;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  ground = new Ground(600, 600, 1200, 20);
  box1 = new Box(600,480,50,50);
  box2 = new Box(600,400,50,50);
  box3 = new Box(600,320,50,50);
  box4 = new Box(600,240,50,50);
  box5 = new Box(600,160,50,50);
  box6 = new Box(600,80,50,50);
  box7 = new Box(700,400,50,50);
  box8 = new Box(700,320,50,50);
  box9 = new Box(700,240,50,50);
  box10 = new Box(700,160,50,50);
  box11 = new Box(700,80,50,50);
  box12 = new Box(800,320,50,50);
  box13 = new Box(800,240,50,50);
  box14 = new Box(800,160,50,50);
  box15 = new Box(800,80,50,50);
  
  pendulum1 = new Pendulum(340, 450, "brown");
  sling1 = new Sling(pendulum1.body, { x: 500, y: 100 });

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
  pendulum1.display();
  sling1.display();
}


function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}