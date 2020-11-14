const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var mango1, mango2, mango3, mango4, mango5, mango6;
//var launchingforce=50;
var tree, stone, ground, launcher;

function preload()
{
	boy=loadImage("Plucking+mangoes/boy.png")
	//treeimage=loadImage("Plucking+mangoes/tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20);
	tree = new Tree(1050,600);
	stone = new Stone(215, 420, 30);
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	launcher=new Launcher(stone.body,{x:235, y:420})

  Engine.run(engine);
  
  
}


function draw(){
  rectMode(CENTER);
  background(255);
  image(boy,200,340,200,300);
  imageMode(CENTER)
  //image(treeimage,1050,300, 500, 640);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  stone.display();
  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}


function mouseReleased(){
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.radius+lstone.radius)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
