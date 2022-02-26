const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(width*0.65,100,width/16,width/16);
    box2 = new Box(width*0.85,100,width/16,width/16);
    box3 = new Box(width*0.85,65,width/16,width/16);
    box4 = new Box(width*0.65,65,width/16,width/16);
    log1 = new Log(width*0.75,85,width/40, width/3.5, PI/2)
    log2 = new Log(width*0.75,50,width/40, width/3.5, PI/2)
    ground = new Ground(width/2,height,width,20)
    ground3 = new Ground(width,height/2,20,height)
    ground2 = new Ground(width/width,height/2,20,height)
    boxTest1 = new Box(width*0.33,0,width/20,width/20);
    boxTest2 = new BoxTest(width*0.35,30,width/16,width/16);
    boxTest3 = new BoxTest(width*0.35,10,width/16,width/16);
    boxTest4 = new BoxTest(width*0.75,65,width/16,width/16)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    boxTest1.display();
    boxTest2.display();
    boxTest3.display();
    boxTest4.display();
    ground2.display();
    ground.display();
    ground3.display();
}