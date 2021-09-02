const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var ground;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
createCanvas(400,400);

engine = Engine.create();
world = engine.world;

angle = -PI / 4;
 ground = new Ground(0, height - 1, width * 2, 1); 
 tower = new Tower(150, 350, 160, 310);
 cannon = new Cannon(180, 110, 100, 50, angle);


rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw() 
{
background(51);
Engine.update(engine);
tower.display();
ground.display();
cannon.display();
 
}

