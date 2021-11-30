
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 565, 20, 190);
	rightSide = new Ground(900, 565, 20, 190);

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
   
    }

	ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);

  //drawSprites();
 keyPressed();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 0.5, y : -0.05});
		//Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 0, y : -1});

	}
}



