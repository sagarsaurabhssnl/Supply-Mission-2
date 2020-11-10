var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var contain1;
var num=0;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(0);

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, windowWidth, 50 , {isStatic:true} );
 	World.add(world, ground);

	contain1= new Container(340,500,20,100);
	contain2= new Container(400,540,100,20);
	contain3= new Container(460,500,20,100)

	Engine.run(engine);

	console.log(packageBody);
}

function draw() {  
  background(225);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
	contain1.show();
	contain2.show();
	contain3.show();
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW&&num===0) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	   World.add(world, packageBody);
	   num=1;
	   numreset();
	 }
   }

   function numreset(){
	   setInterval(numre, 2000);
   }

   function numre(){
	   num= 0;
   }