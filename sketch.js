const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var tower = "standing";

var ballwidth = 100;
var ballheight = 100;
var ball2width = 50;
var ball2height = 50;

var gameState = "play"
var engine, world;
var ball, ball2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;

var ground;
var slingShot, slingShot2;
var platForm;

function setup(){
    var canvas = createCanvas(
        800,
        400
    );
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100, 200, ballwidth, ballheight);
    ball2 = new Ball(100, 100, ball2width, ball2height);
    platForm = new Ground(300, 200, 100, 20)
    ground = new Ground(width / 2, height, width, 20);

    slingShot = new Slingshot(ball.body,{x : 100, y: 300});
    slingShot2 = new Slingshot(ball2.body,{x : 100, y: 100});
    box1 = new Box(300, 300, 50, 50);
    box2 = new Box(300, 250, 40, 40);
    box3 = new Box(300, 235, 30, 30);
    box4 = new Box(300, 200, 20, 20);
    box5 = new Box(300, 100, 20, 20);
    box6 = new Box(300, 50, 10, 300);

}

function draw(){
    background(255);
    ball.display();
    ball2.display();
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    platForm.display();

    slingShot.display();    
    slingShot2.display();    

    if (box2.body.position.x > 400){
        console.log("knocked")
        if (tower = "standing"){
            score += 1
        }
    }
    if (box3.body.position.x > 400){
        console.log("knocked")
        if (tower = "standing"){
            score += 1
        }
    }
    if (box4.body.position.x > 400){
        console.log("knocked")
        if (tower = "standing"){
            score += 1
        }
        // World.Composite.remove(world, box4.body)
    }
    if (box5.body.position.x > 400){
        console.log("knocked")
        if (tower = "standing"){
            score += 1
        }
        // World.Composite.remove(world, box5.body)
    }
    if (box6.body.position.x > 400){
        console.log("knocked")
        if (tower = "standing"){
            score += 1
        }
        // World.Composite.remove(world, box6.body)
    }

    if (box2.body.position.x > 350 && box3.body.position.x > 350 && box4.body.position.x > 350 && box5.body.position.x > 350 && box6.body.position.x > 400 || box2.body.position.x < 300 && box3.body.position.x < 300&& box4.body.position.x  < 300&& box5.body.position.x < 300 && box6.body.position.x <300  ){
        tower = "fallen"

        console.log("fallen")
        if (frameCount % 60 == 0){
        alert("congratulations you just knocked the tower with  the balls in just one try")   
        alert("Your score is " + score)
        alert("Thank you for not exiting this program, thus your score will keep increasing as long as you dont exit this program")
        }
     }

   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
    Matter.Body.setPosition(ball2.body, {x : mouseX, y : mouseY - 200});
    line(mouseX, mouseY, pmouseX, pmouseY);
    ballwidth = random(10, 250);
    ballheight = random(10, 250);
    ball2height = random(10, 255);
    ball2width = random(10, 255)
}

function mouseReleased(){
    slingShot.fly();
    slingShot2.fly();
}



