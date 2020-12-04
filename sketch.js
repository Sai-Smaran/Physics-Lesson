
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const ConStraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball1 = new Ball(180, 600, 50);
	ball2 = new Ball(280, 600, 50);
	ball3 = new Ball(380, 600, 50);
	ball4 = new Ball(480, 600, 50);
	ball5 = new Ball(580, 600, 50);

	rooffake = new Roof(400, 100, 550, 80);
	roof1 = new Roof(180, 100, 100, 80);
	roof2 = new Roof(280, 100, 100, 80);
	roof3 = new Roof(380, 100, 100, 80);
	roof4 = new Roof(480, 100, 100, 80);
	roof5 = new Roof(580, 100, 100, 80);

	rope1 = new joint(ball1.body, roof1.body, 100, 100);
	rope2 = new joint(ball2.body, roof2.body, 100, 100);
	rope3 = new joint(ball3.body, roof3.body, 100, 100);
	rope4 = new joint(ball4.body, roof4.body, 100, 100);
	rope5 = new joint(ball5.body, roof5.body, 100, 100);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:-20})
	}
	roof1.display();
	roof2.display();
	roof3.display();
	roof4.display();
	roof5.display();
	rooffake.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
}
