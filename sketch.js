
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score =0
function preload()
{
	 polygonimage=loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);
	slingshot = new SlingShot(this.polygon,{x:100,y:200});



	ground = new Ground(600,height,1200,20);
	ground2 = new Ground(600,600,300,50);
	 box1 = new Box(600,550,50,50);
	 box2 = new Box(550,550,50,50);
	 box3 = new Box(500,550,50,50);
	 box4 = new Box(650,550,50,50);
	 box5 = new Box(700,550,50,50);
	 box6 = new Box(600,500,50,50);
	 box7 = new Box(650,500,50,50);
	 box8 = new Box(550,500,50,50);
	 box9 = new Box(625,450,50,50);
	 box10 = new Box(575,450,50,50);
	 box11 = new Box(600,400,50,50);
	
      


	Engine.run(engine);
  
}


function draw() {
  
  background("blue");
  rectMode(CENTER);
  imageMode(CENTER)
  text("score:"+score,750,40)
 
  ground.display();
  ground2.display();
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
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  
  image(polygonimage,polygon.position.x,polygon.position.y,50,50);
 slingshot.display();
 
  
  

  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
