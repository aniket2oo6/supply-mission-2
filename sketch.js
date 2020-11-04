const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2,box3,box4,box5,box6,box7,box8,box9,wall1,wall2,wall3;


function setup(){

   var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;

   box1 = new box(200,200,30,30);
   box2 = new box(200,170,30,30);
   box3 = new box(200,230,30,30);
   box4 = new box(150,200,30,30);
   box5 = new box(150,170,30,30);
   box6 = new box(150,230,30,30);
   box7 = new box(250,200,30,30);
   box8 = new box(250,170,30,30);
   box9 = new box(250,230,30,30);
   
   var ground_options ={
        isStatic: true
    }

   var wall1_options ={
       isStatic: true
   }

   var wall2_options ={
       isStatic: true
   }

   var wall3_options ={
    isStatic: true
   }
   

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    wall1 = Bodies.rectangle(85,330,10,50,wall1_options);
    World.add(world,wall1);
    wall2 = Bodies.rectangle(315,330,10,50,wall2_options);
    World.add(world,wall2);
    wall3 = Bodies.rectangle(200,390,200,20,wall3_options);
    World.add(world,wall3);
 
    console.log(ground);
    console.log(wall1);

}

function draw(){

    background(0);
    Engine.update(engine);

    rect(wall1.position.x,wall1.position.y,10,50);
    rect(wall2.position.x,wall2.position.y,10,50);

    

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill("red");
    
    rect(wall3.position.x,wall3.position.y,200,20);

}