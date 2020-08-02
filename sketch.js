var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1,side2,side33;
var packageBody,ground,side11,side22,side33;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	side1=createSprite(290,620, 20,100);
	side2=createSprite(510, 620, 20,100);
	side3=createSprite(400, 650,200,20);





	packageSprite=createSprite(width/2, 80, 100,100);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15
packageSprite.shapeColor=color(255);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	side11= Bodies.rectangle(290, 620, 20,100,{isStatic:true});
	World.add(world, side11);


	side22 = Bodies.rectangle(510, 620, 20,100,{isStatic:true});
	World.add(world, side22);


	side33 = Bodies.rectangle(400, 650,200,20,{isStatic:true});
	World.add(world, side33);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 
	side1.x=side11.position.x
	side1.y=side11.position.y
	side2.x=side22.position.x
	side2.y=side22.position.y
	side3.x=side33.position.x
	side3.y=side33.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
	
    
  }
}

