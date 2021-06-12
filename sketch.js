
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g1;
var b1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	b1=new Paper(120,280);
	g1=new Ground(500,500,1000,20);
    g2=new Box(550,410,10,170);
	g3=new Box(750,410,10,170);
	g4=new Box(650,490,200,10);
}

function draw(){
  background("black");
  text(mouseX+":"+mouseY,400,400);
  b1.display();
  g1.display();
  g2.display();
  g3.display();
  g4.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:4,y:-6})
	}
}


