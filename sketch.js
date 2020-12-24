
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var block1 , block2 , block3 , block4 , block5 , block6 ;
var block7 , block8 , block9 , block10 ;
var block11 , block12 ;
var block13 ;
var ground2;
var block14 , block15 , block16 , block17 , block18 , block19  ;
var block20 ,block21 , block22 , block23 ;
var block24 , block25 ;
var block26 ;
var polygon , polygonImg ;
var slingshot ;

function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(390,660,240,20);

fill("blue");
block1 = new Box(400,630,40,50);
block2 = new Box(430,630,40,50);
block3 = new Box(460,630,40,50);
block4 = new Box(370,630,40,50);
block5 = new Box(350,630,40,50);
block6 = new Box(330,630,40,50);

block7 = new Box(400,600,40,50);
block8 = new Box(430,600,40,50);
block9 = new Box(370,600,40,50);
block10 = new Box(350,600,40,50);

block11 = new Box(400,570,40,50);
block12 = new Box(370,570,40,50);

block13 = new Box(390,530,40,50);

ground2 = new Ground(485,300,250,20);

block14 = new Box(500,280,40,50);
block15 = new Box(530,280,40,50);
block16 = new Box(560,280,40,50);
block17 = new Box(470,280,40,50);
block18 = new Box(440,280,40,50);
block19 = new Box(410,280,40,50);

block20 = new Box(530,260,40,50);
block21 = new Box(500,260,40,50);
block22 = new Box(470,260,40,50);
block23 = new Box(440,260,40,50);

block24 = new Box(470,240,40,50);
block25 = new Box(500,240,40,50);

block26 = new Box(485,210,40,50);

strokeWeight(4);
polygon = Bodies.circle(50,200,20);
World.add(world , polygon);

fill("red")
slingshot = new SlingShot(this.polygon , { x: 100 , y: 200 });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
image(polygonImg , polygon.position.x , polygon.position.y , 60, 60 );
  
  ground.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();

  block13.display();

  ground2.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display(); 
  block18.display(); 
  block19.display(); 

  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block24.display();
  block25.display();

  block26.display();

  slingshot.display();

  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
slingshot.fly();
	}

  function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(this.polygon);
    }
}